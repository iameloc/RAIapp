
import Link from "next/link";
import MemberHeader from "@/components/MemberHeader";

// Dados fictícios: não há persistência.
const eixos = [
  {
    slug: "inovacao-educacional",
    nome: "Inovação Educacional",
    coordenador: "Geovanna Angelino",
    membros: "06 membros",
    cor: "bg-violet",
  },
  {
    slug: "tecnologias-em-saude",
    nome: "Tecnologias em Saúde",
    coordenador: "Savlio Pontes",
    membros: "10 membros",
    cor: "bg-pink-500",
  },
  {
    slug: "tecnico-sustentavel",
    nome: "Técnico Sustentável",
    coordenador: "Lucas Sobral",
    membros: "08 membros",
    cor: "bg-green-400",
  },
];

const projetos = [
  {
    titulo: "Comedouro automático",
    eixo: "Tecnologias em Saúde",
    cor: "bg-pink-500",
  },
  {
    titulo: "Drone",
    eixo: "Técnico Sustentável",
    cor: "bg-green-400",
  },
  {
    titulo: "ACCS - Estado de Alagoas",
    eixo: "Inovação Educacional",
    cor: "bg-violet",
  },
];

const eventos = [
  {
    titulo: "Mostra de projetos",
    eixo: "Tecnologias em Saúde",
    cor: "bg-pink-500",
  },
  {
    titulo: "Feira das profissões",
    eixo: "Técnico Sustentável",
    cor: "bg-green-400",
  },
  {
    titulo: "Encontros universitários",
    eixo: "Inovação Educacional",
    cor: "bg-violet",
  },
];

export default async function AreaMembroPage({
  searchParams,
}: {
  searchParams: Promise<
    Record<string, string | string[] | undefined>
  >;
}) {
  const sp = await searchParams;

  const get = (k: string, fallback: string) =>
    typeof sp[k] === "string" && sp[k]
      ? (sp[k] as string)
      : fallback;

  const nome = get("nome", "Nome do membro");
  const time = get("time", "Time");
  const eixo = get("eixo", "Eixo");

  return (
    <div className="mx-auto min-h-dvh max-w-sm bg-[#eeeeee] font-display text-navy">

      <MemberHeader
        nome={nome}
        time={time}
        eixo={eixo}
      />

      <main className="px-2 pb-10">

        {/* EIXOS CADASTRADOS */}
        <section className="mt-5">
          <h2 className="mb-3 text-2xl font-medium tracking-tight">
            Eixos cadastrados
          </h2>

          <div className="flex flex-col gap-3">
            {eixos.map((item) => (
              <Link
                key={item.slug}
                href={`/eixos/${item.slug}?nome=${encodeURIComponent(nome)}&time=${encodeURIComponent(time)}&eixo=${encodeURIComponent(eixo)}`}
                className="flex min-h-[79px] items-center justify-between rounded-3xl bg-white px-4 py-3 transition-all hover:shadow-md active:scale-[0.99]"
              >
                <div>
                  <h3 className="text-[21px] leading-tight font-black tracking-tight">
                    {item.nome}
                  </h3>

                  <p className="text-[11px] text-black">
                    Coordenador(a): {item.coordenador}
                  </p>

                  <p className="text-[11px] font-extrabold text-violet">
                    {item.membros}
                  </p>
                </div>

                <span
                  className={`h-7 w-7 shrink-0 rounded-full ${item.cor}`}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* PROJETOS EM ANDAMENTO */}
        <section className="mt-7">
          <h2 className="mb-3 text-2xl font-medium tracking-tight">
            Projetos em andamento
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white divide-y divide-black/10">
            {projetos.map((projeto) => (
              <article
                key={projeto.titulo}
                className="flex min-h-[45px] items-center justify-between px-4 py-1.5"
              >
                <div>
                  <h3 className="text-[13px] leading-tight font-bold">
                    {projeto.titulo}
                  </h3>

                  <p className="text-[8px] leading-tight text-black">
                    {projeto.eixo}
                  </p>
                </div>

                <span
                  className={`h-7 w-7 shrink-0 rounded-full ${projeto.cor}`}
                />
              </article>
            ))}
          </div>
        </section>

        {/* EVENTOS REALIZADOS */}
        <section className="mt-7">
          <h2 className="mb-3 text-2xl font-medium tracking-tight">
            Eventos realizados
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white divide-y divide-black/10">
            {eventos.map((evento) => (
              <article
                key={evento.titulo}
                className="flex min-h-[45px] items-center justify-between px-4 py-1.5"
              >
                <div>
                  <h3 className="text-[13px] leading-tight font-bold">
                    {evento.titulo}
                  </h3>

                  <p className="text-[8px] leading-tight text-black">
                    {evento.eixo}
                  </p>
                </div>

                <span
                  className={`h-7 w-7 shrink-0 rounded-full ${evento.cor}`}
                />
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
