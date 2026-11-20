
"use client";

import Link from "next/link";
import { useState } from "react";

export default function MemberHeader({
  nome,
  time,
  eixo,
}: {
  nome: string;
  time: string;
  eixo: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-navy px-5 py-5 text-white">
      <div className="flex items-center gap-4">

        <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-surface text-navy">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cx="12" cy="8" r="4" />
            <path
              d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex-1">
          <p className="font-display text-lg font-medium">
            {nome}
          </p>

          {/* LINK PARA A ÁREA DO MEMBRO */}
          <Link
  href={`/areamembro?nome=${encodeURIComponent(nome)}&time=${encodeURIComponent(time)}&eixo=${encodeURIComponent(eixo)}`}
  className="inline-block font-display text-xs text-white/80"
>
  {time} • {eixo}
        </Link>
        </div>
        

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
          className="p-1"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-6 w-6 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* MENU SUSPENSO */}
      {open && (
        <nav className="absolute top-full right-4 z-10 mt-1 w-44 overflow-hidden rounded-xl bg-white text-sm text-navy shadow-lg">

          <Link
           href={`/perfil?nome=${encodeURIComponent(nome)}&time=${encodeURIComponent(time)}&eixo=${encodeURIComponent(eixo)}`}
            className="block px-4 py-2.5 hover:bg-surface"
            onClick={() => setOpen(false)}
          >
            Meu perfil
          </Link>

          <Link
            href="/login"
            className="block border-t border-black/10 px-4 py-2.5 text-red-600 hover:bg-surface"
            onClick={() => setOpen(false)}
          >
            Sair
          </Link>

        </nav>
      )}
    </header>
  );
}
