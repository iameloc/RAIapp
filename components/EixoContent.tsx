"use client";

import Link from "next/link";
import { useState } from "react";
import MemberHeader from "@/components/MemberHeader";

// Dados fictícios: não há persistência.

type Status = "satisfatorio" | "atencao" | "atrasado";

const eixos: Record<
  string,
  {
    nome: string;
    coordenador: string;
    cor: string;
  }
> = {
  "inovacao-educacional": {
    nome: "Inovação Educacional",
    coordenador: "Geovanna Angelino",
    cor: "bg-violet",
  },
  "tecnologias-em-saude": {
    nome: "Tecnologias em Saúde",
    coordenador: "Savlio Pontes",
    cor: "bg-pink-500",
  },
  "tecnico-sustentavel": {
    nome: "Técnico Sustentável",
    coordenador: "Lucas Sobral",
    cor: "bg-green-400",
  },
};

// Dados de demonstração dos membros.
const membros = [
  {
    nome: "Amanda",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["Braço robótico"],
  },
  {
    nome: "Cicrano",
    status: "atrasado" as Status,
    desempenho: "Precisa melhorar",
    projetos: ["Comedouro automático", "RAIgala"],
  },
  {
    nome: "Fulano",
    status: "atencao" as Status,
    desempenho: "Em desenvolvimento",
    projetos: ["Braço robótico"],
  },
  {
    nome: "Guilherme",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["Comedouro automático"],
  },
  {
    nome: "Iago",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["RAIgala"],
  },
  {
    nome: "Ithalo",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["Braço robótico"],
  },
  {
    nome: "João",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["Comedouro automático"],
  },
  {
    nome: "Letícia",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["RAIgala"],
  },
  {
    nome: "Marcos",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["Braço robótico"],
  },
  {
    nome: "Vitória",
    status: "satisfatorio" as Status,
    desempenho: "Satisfatório",
    projetos: ["Comedouro automático"],
  },
];

// Dados de demonstração dos projetos.
const projetos = [
  {
    nome: "Braço robótico",
    eixo: "Tecnologias em Saúde",
    membros: ["Amanda", "Fulano", "Ithalo", "Marcos"],
    status: "Em andamento",
  },
  {
    nome: "Comedouro automático",
    eixo: "Técnico Sustentável",
    membros: ["Cicrano", "Guilherme", "João", "Vitória"],
    status: "Atrasado",
  },
  {
    nome: "RAIgala",
    eixo: "Inovação Educacional",
    membros: ["Cicrano", "Iago", "Letícia"],
    status: "Em andamento",
  },
];

const statusCores: Record<Status, string> = {
  satisfatorio: "bg-[#22b467]",
  atencao: "bg-[#f4b400]",
  atrasado: "bg-[#ed3535]",
};

export default function EixoContent({
  slug,
  nome,
  time,
  eixo: eixoMembro,
}: {
  slug: string;
  nome: string;
  time: string;
  eixo: string;
}) {
  const eixo = eixos[slug];

  const [membroSelecionado, setMembroSelecionado] =
    useState<string | null>(null);

  const [projetoSelecionado, setProjetoSelecionado] =
    useState<string | null>(null);

  if (!eixo) {
    return (
      <div className="min-h-dvh bg-[#eeeeee] p-8 text-navy">
        Eixo não encontrado.
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-dvh max-w-sm bg-[#eeeeee] font-display text-navy">

      {/* CABEÇALHO */}
      <MemberHeader
        nome={nome}
        time={time}
        eixo={eixoMembro}
      />

      <main className="px-2 pb-10">

        {/* IDENTIFICAÇÃO DO EIXO */}
        <section className="mx-1 mt-5 flex min-h-[80px] items-center justify-between rounded-3xl bg-white px-4 py-3">
          <div>
            <h1 className="text-[21px] leading-tight font-black tracking-tight">
              {eixo.nome}
            </h1>

            <p className="text-[11px] text-black">
              Coordenador(a): {eixo.coordenador}
            </p>

            <p className="text-[11px] font-extrabold text-violet">
              {membros.length.toString().padStart(2, "0")} membros
            </p>
          </div>

          <span
            className={`h-7 w-7 shrink-0 rounded-full ${eixo.cor}`}
          />
        </section>

        {/* MEMBROS */}
        <section className="mt-7">
          <h2 className="mb-6 px-1 text-2xl font-medium tracking-tight">
            Membros:
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white">

            {membros.map((membro) => {
              const aberto =
                membroSelecionado === membro.nome;

              return (
                <div key={membro.nome}>

                  {/* LINHA DO MEMBRO */}
                  <button
                    type="button"
                    onClick={() => {
                      setMembroSelecionado(
                        aberto ? null : membro.nome
                      );
                      setProjetoSelecionado(null);
                    }}
                    aria-expanded={aberto}
                    className="flex min-h-[30px] w-full items-center justify-between border-b border-black/15 px-3 py-1 text-left transition-colors hover:bg-gray-50"
                  >
                    <span className="text-[13px] font-bold">
                      {membro.nome}
                    </span>

                    <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={`h-6 w-6 rounded-full ${statusCores[membro.status]}`}
                      title={membro.desempenho}
                    />

                    <Link
                      href={`/avaliacao-cruzada?avaliador=${encodeURIComponent(nome)}&avaliado=${encodeURIComponent(membro.nome)}&time=${encodeURIComponent(time)}&eixo=${encodeURIComponent(eixoMembro)}`}
                      className="rounded-full bg-violet px-3 py-1.5 text-[10px] font-bold text-white hover:opacity-80"
                    >
                      Avaliar
                    </Link>
                  </div>
                  </button>

                  {/* DETALHES DO MEMBRO */}
                  {aberto && (
                    <div className="bg-[#d9d9d9] px-3 py-3 text-[#25254f]">

                      <p className="text-[13px] font-bold text-violet">
                        Projetos em andamento
                      </p>

                      <ul className="mt-1">
                        {membro.projetos.map((projeto) => (
                          <li
                            key={projeto}
                            className="text-[12px] leading-tight"
                          >
                            • {projeto}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-3 text-[13px] font-bold text-violet">
                        Desempenho:
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[12px]">
                          • {membro.desempenho}
                        </span>

                        <span
                          className={`h-6 w-6 rounded-full ${statusCores[membro.status]}`}
                        />
                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </section>

        {/* PROJETOS */}
        <section className="mt-9">
          <h2 className="mb-3 px-1 text-2xl font-medium tracking-tight">
            Projetos
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white">

            {projetos.map((projeto) => {
              const aberto =
                projetoSelecionado === projeto.nome;

              return (
                <div key={projeto.nome}>

                  {/* LINHA DO PROJETO */}
                  <button
                    type="button"
                    onClick={() => {
                      setProjetoSelecionado(
                        aberto ? null : projeto.nome
                      );
                      setMembroSelecionado(null);
                    }}
                    aria-expanded={aberto}
                    className="flex min-h-[34px] w-full items-center justify-between border-b border-black/15 px-3 py-1 text-left transition-colors hover:bg-gray-50"
                  >
                    <div>
                      <p className="text-[13px] leading-tight font-bold">
                        {projeto.nome}
                      </p>

                      <p className="text-[8px] leading-tight text-black">
                        {projeto.eixo}
                      </p>
                    </div>

                  </button>

                  {/* DETALHES DO PROJETO */}
                  {aberto && (
                    <div className="bg-[#d9d9d9] px-3 py-3 text-[#25254f]">

                      <p className="text-[13px] font-bold text-violet">
                        Membros
                      </p>

                      <ul className="mt-1">
                        {projeto.membros.map((nome) => (
                          <li
                            key={nome}
                            className="text-[12px] leading-tight"
                          >
                            • {nome}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-3 text-[13px] font-bold text-violet">
                        Status:
                      </p>

                      <p className="mt-1 text-[12px]">
                        • {projeto.status}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </section>

      </main>
    </div>
  );
}
