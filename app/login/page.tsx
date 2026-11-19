"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { PasswordField, TextField } from "@/components/FormField";
import PrimaryButton from "@/components/PrimaryButton";

export default function LoginPage() {
  const router = useRouter();
  const [showForgot, setShowForgot] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Sem autenticação: apenas navega para o painel.
    router.push("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col px-9 pt-11 pb-10">
      <Logo />

      <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-6">
        <TextField label="E-mail" name="email" type="email" placeholder="Insira seu e-mail..." required />
        <PasswordField label="Senha" name="senha" placeholder="Insira sua senha..." required />

        <div className="mt-1">
          <PrimaryButton>Login</PrimaryButton>
          <button
            type="button"
            onClick={() => setShowForgot((v) => !v)}
            className="mt-2 ml-2 text-xs text-blue-600 underline hover:text-blue-800"
          >
            Esqueceu sua senha?
          </button>
          {showForgot && (
            <p className="mt-2 ml-2 text-xs text-black/70">
              Entre em contato com a coordenação do seu eixo para redefinir sua senha.
            </p>
          )}
        </div>
      </form>

      <div className="mt-auto pt-16 text-center text-lg">
        <p>Ainda não possui conta?</p>
        <Link href="/cadastro" className="text-blue-600 underline hover:text-blue-800">
          Cadastre-se no RAIapp
        </Link>
      </div>
    </main>
  );
}
