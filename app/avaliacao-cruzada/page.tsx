
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import MemberHeader from "@/components/MemberHeader";

export default function AvaliacaoCruzadaPage() {
  const searchParams = useSearchParams();

  const avaliador = searchParams.get("avaliador") || "Nome do membro";
  const avaliado = searchParams.get("avaliado") || "Membro";
  const time = searchParams.get("time") || "Time";
  const eixo = searchParams.get("eixo") || "Eixo";

  const [notas, setNotas] = useState({
    participacao: 0,
    compromisso: 0,
    colaboracao: 0,
    proatividade: 0,
    entregas: 0,
  });

  const [resenha, setResenha] = useState("");
  const [enviado, setEnviado] = useState(false);

  const criterios = [
    {
      id: "participacao",
      titulo: "Participação",
      descricao: "Envolvimento nas atividades e reuniões.",
    },
    {
      id: "compromisso",
      titulo: "Compromisso",
      descricao: "Responsabilidade com prazos e tarefas.",
    },
    {
      id: "colaboracao",
      titulo: "Colaboração",
      descricao: "Capacidade de trabalhar em equipe.",
    },
    {
      id: "proatividade",
      titulo: "Proatividade",
      descricao: "Iniciativa e disposição para contribuir.",
    },
    {
      id: "entregas",
      titulo: "Qualidade das entregas",
      descricao: "Qualidade e consistência do trabalho realizado.",
    },
  ] as const;

  const notaMedia =
    Object.values(notas).reduce((total, nota) => total + nota, 0) / 5;

  function enviarAvaliacao() {
    if (Object.values(notas).some((nota) => nota === 0)) {
      alert("Avalie todos os critérios antes de enviar.");
      return;
    }

    if (!resenha.trim()) {
      alert("Escreva uma resenha sobre o desempenho do membro.");
      return;
    }

    // Protótipo: a avaliação ainda não é salva em um banco de dados.
    setEnviado(true);
  }

  return (
    <div className="mx-auto min-h-dvh max-w-sm bg-[#eeeeee] font-display text-navy">

      <MemberHeader
        nome={avaliador}
        time={time}
        eixo={eixo}
      />

      <main className="px-3 pb-10">

        {/* IDENTIFICAÇÃO */}
        <section className="mt-5 rounded-3xl bg-white px-4 py-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-violet">
            Avaliação cruzada
          </p>

          <h1 className="mt-1 text-2xl font-black tracking-tight">
            Avaliar membro
          </h1>

          <p className="mt-1 text-xs text-black/60">
            Registre sua percepção sobre o desempenho de outro integrante.
          </p>

          <div className="mt-4 border-t border-black/10 pt-3">
            <p className="text-[10px] text-black/50">
              Membro avaliado
            </p>

            <p className="text-lg font-bold">
              {avaliado}
            </p>

            <p className="text-[11px] text-black/60">
              {eixo} • {time}
            </p>
          </div>
        </section>

        {/* CRITÉRIOS */}
        <section className="mt-6">
          <h2 className="mb-1 px-1 text-xl font-bold">
            Critérios de avaliação
          </h2>

          <p className="mb-3 px-1 text-[11px] text-black/60">
            Selecione uma nota de 1 a 5 para cada critério.
          </p>

          <div className="flex flex-col gap-3">
            {criterios.map((criterio) => (
              <article
                key={criterio.id}
                className="rounded-2xl bg-white px-4 py-3"
              >
                <h3 className="text-sm font-bold">
                  {criterio.titulo}
                </h3>

                <p className="mt-0.5 text-[10px] text-black/60">
                  {criterio.descricao}
                </p>

                <div className="mt-3 flex justify-between gap-2">
                  {[1, 2, 3, 4, 5].map((nota) => (
                    <button
                      key={nota}
                      type="button"
                      onClick={() =>
                        setNotas((atual) => ({
                          ...atual,
                          [criterio.id]: nota,
                        }))
                      }
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
                        notas[criterio.id] === nota
                          ? "bg-violet text-white scale-110"
                          : "bg-[#eeeeee] text-navy hover:bg-violet/20"
                      }`}
                    >
                      {nota}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-3 px-1 text-[10px] text-black/50">
            1 = Muito abaixo do esperado • 5 = Excelente
          </p>
        </section>

        {/* RESENHA */}
        <section className="mt-7">
          <h2 className="mb-1 px-1 text-xl font-bold">
            Resenha de desempenho
          </h2>

          <p className="mb-3 px-1 text-[11px] text-black/60">
            Descreva os pontos positivos e o que pode ser melhorado.
          </p>

          <div className="rounded-3xl bg-white p-4">
            <label
              htmlFor="resenha"
              className="text-xs font-bold"
            >
              Sua avaliação escrita
            </label>

            <textarea
              id="resenha"
              value={resenha}
              onChange={(e) => setResenha(e.target.value)}
              placeholder="Escreva sua percepção sobre a participação, colaboração e desempenho deste membro..."
              rows={6}
              className="mt-2 w-full resize-none rounded-2xl bg-[#eeeeee] p-3 text-xs text-navy outline-none placeholder:text-black/40 focus:ring-2 focus:ring-violet"
            />

            <p className="mt-1 text-right text-[9px] text-black/40">
              {resenha.length} caracteres
            </p>
          </div>
        </section>

        {/* RESULTADO */}
        <section className="mt-5 rounded-3xl bg-white px-4 py-3">
          <p className="text-xs font-bold">
            Média da avaliação
          </p>

          <p className="mt-1 text-3xl font-black text-violet">
            {notaMedia.toFixed(1).replace(".", ",")}
            <span className="ml-1 text-sm text-black/40">/ 5,0</span>
          </p>
        </section>

        {/* ENVIO */}
        {enviado ? (
          <div className="mt-5 rounded-2xl bg-white p-4 text-center">
            <p className="font-bold text-violet">
              Avaliação concluída!
            </p>
            <p className="mt-1 text-xs text-black/60">
              Sua avaliação foi registrada nesta demonstração.
              Ela ainda não foi salva permanentemente.
            </p>
          </div>
        ) : (
          <button
            type="button"
            onClick={enviarAvaliacao}
            className="mt-5 w-full rounded-full bg-violet py-3 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Enviar avaliação
          </button>
        )}

        <Link
          href={`/areamembro?nome=${encodeURIComponent(avaliador)}&time=${encodeURIComponent(time)}&eixo=${encodeURIComponent(eixo)}`}
          className="mt-4 block text-center text-xs font-bold text-violet hover:underline"
        >
          Voltar à área do membro
        </Link>

      </main>
    </div>
  );
}
