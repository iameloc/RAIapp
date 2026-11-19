import MemberHeader from "@/components/MemberHeader";

// Dados fictícios: não há persistência.
const desempenho = { atual: 30, total: 100 };

const trajetoria = [
  { valor: 5, rotulo: "Capacitações realizadas" },
  { valor: 3, rotulo: "Cursos concluídos" },
  { valor: 4, rotulo: "Visitas realizadas" },
  { valor: 10, rotulo: "Atividades registradas" },
];

const atividades = [
  { titulo: "Scrum e Trello", tipo: "Capacitação", data: "27/10/26", status: "Concluída" },
  { titulo: "Circuitos", tipo: "Capacitação", data: "29/10/26", status: "Concluída" },
  { titulo: "RAIgala", tipo: "Projeto", data: "30/10/26", status: "Concluída" },
];

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const get = (k: string, fallback: string) => (typeof sp[k] === "string" && sp[k] ? (sp[k] as string) : fallback);
  const nome = get("nome", "Nome do membro");
  const time = get("time", "Time");
  const eixo = get("eixo", "Eixo");
  const primeiroNome = sp.nome ? nome.split(" ")[0] : "Membro";
  const pct = Math.round((desempenho.atual / desempenho.total) * 100);

  return (
    <div className="mx-auto min-h-dvh max-w-sm font-display text-navy">
      <MemberHeader nome={nome} time={time} eixo={eixo} />

      <main className="px-2 pb-10">
        <h2 className="mt-5 text-2xl font-medium">Olá, {primeiroNome}!</h2>

        <section className="mt-4 rounded-2xl bg-teal px-4 py-5">
          <h3 className="text-2xl font-black">Seu desempenho</h3>
          <div
            className="mt-3 h-4 w-full overflow-hidden rounded-full border-2 border-navy bg-white"
            role="progressbar"
            aria-valuenow={desempenho.atual}
            aria-valuemin={0}
            aria-valuemax={desempenho.total}
          >
            <div className="h-full rounded-full bg-navy" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-2xl font-black">
            {desempenho.atual}/{desempenho.total}
          </p>
        </section>

        <section className="mt-12">
          <h3 className="text-base font-extrabold">Minha trajetória</h3>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {trajetoria.map((t) => (
              <div key={t.rotulo} className="rounded-2xl bg-white px-3 py-3">
                <p className="text-2xl font-black text-violet">{String(t.valor).padStart(2, "0")}</p>
                <p className="text-base leading-tight font-extrabold">{t.rotulo}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h3 className="text-base font-extrabold">Atividades recentes</h3>
          <ul className="mt-2 divide-y divide-black/10 overflow-hidden rounded-2xl bg-white">
            {atividades.map((a) => (
              <li key={a.titulo} className="flex items-center justify-between px-3 py-1.5">
                <div>
                  <p className="text-sm font-medium">{a.titulo}</p>
                  <p className="text-[9px] text-black">
                    {a.tipo} · {a.data}
                  </p>
                </div>
                <span className="w-18 rounded-md bg-green-300 py-0.5 text-center text-xs font-bold text-green-800">
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
