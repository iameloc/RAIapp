import Link from "next/link";
import MemberHeader from "@/components/MemberHeader";

// PROTÓTIPO: os dados abaixo são demonstrativos e NÃO vêm do Forms.
// Antes de usar dados reais, implementar autenticação e consulta autorizada
// a uma API no servidor. NÃO incluir dados pessoais ou PDFs reais no GitHub.
const perfilDemo = {
  semestre: "6º semestre (exemplo)",
  disponibilidade: "Segunda, quarta e sexta — tarde (exemplo)",
  hardSkills: [
    { nome: "Programação", nivel: "Intermediário" },
    { nome: "Simulação de circuitos", nivel: "Básico" },
    { nome: "Planilhas", nivel: "Avançado" },
  ],
  softSkills: ["Trabalho em equipe", "Comunicação", "Organização"],
  dossieUrl: "/dossie-exemplo.pdf", // PDF fictício de demonstração
};

export default async function PerfilPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const get = (campo: string, padrao: string) =>
    typeof sp[campo] === "string" && sp[campo]
      ? (sp[campo] as string)
      : padrao;

  // Nome, time e eixo na URL servem somente à navegação do protótipo.
  // Não são prova da identidade de quem acessa a página.
  const nome = get("nome", "Membro demonstrativo");
  const time = get("time", "Processos");
  const eixo = get("eixo", "Eixo");
  const query = new URLSearchParams({ nome, time, eixo }).toString();

  return (
    <div className="mx-auto min-h-dvh max-w-sm bg-surface font-display text-navy">
      <MemberHeader nome={nome} time={time} eixo={eixo} />
      <main className="space-y-5 px-3 pb-10 pt-6">
        <div>
          <Link href={`/dashboard?${query}`} className="text-sm font-bold text-violet hover:underline">
            ← Voltar ao painel
          </Link>
          <h1 className="mt-3 text-3xl font-black">Meu perfil</h1>
          <p className="mt-1 text-sm text-black/70">Mapeamento de competências · RAITec</p>
        </div>

        <aside className="rounded-xl border border-violet/30 bg-violet/10 p-3 text-xs leading-relaxed">
          <strong>Modo de demonstração:</strong> as competências e a disponibilidade exibidas
          nesta tela são fictícias. A integração com o Google Forms ainda não está ativa.
        </aside>

        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black">Dados acadêmicos</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-black/60">Nome exibido</dt>
              <dd className="mt-1 font-bold">{nome}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black/60">Semestre</dt>
              <dd className="mt-1">{perfilDemo.semestre}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black/60">Disponibilidade</dt>
              <dd className="mt-1">{perfilDemo.disponibilidade}</dd>
            </div>
            <div>
              <dt className="font-semibold text-black/60">Equipe</dt>
              <dd className="mt-1">{time} · {eixo}</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black">Competências técnicas</h2>
          <ul className="mt-3 space-y-3">
            {perfilDemo.hardSkills.map((habilidade) => (
              <li key={habilidade.nome} className="flex items-center justify-between gap-3 border-b border-black/10 pb-3 last:border-0 last:pb-0">
                <span className="text-sm font-semibold">{habilidade.nome}</span>
                <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-bold text-navy">{habilidade.nivel}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-black">Competências comportamentais</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {perfilDemo.softSkills.map((habilidade) => (
              <span key={habilidade} className="rounded-full border border-violet/30 bg-violet/5 px-3 py-2 text-xs font-bold text-violet">
                {habilidade}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-navy p-5 text-white">
          <h2 className="text-lg font-black">Meu dossiê</h2>
          <p className="mt-2 text-sm text-white/75">
            Consulte a versão demonstrativa do dossiê de competências em PDF.
          </p>
          <a
            href={perfilDemo.dossieUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-teal px-4 py-3 text-center text-sm font-black text-navy transition hover:opacity-90"
          >
            Abrir dossiê em PDF ↗
          </a>
        </section>
      </main>
    </div>
  );
}
