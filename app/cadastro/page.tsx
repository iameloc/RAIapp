"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { PasswordField, SelectField, TextField } from "@/components/FormField";
import PrimaryButton from "@/components/PrimaryButton";

const EIXOS = ["Inovação", "Técnico Sustentável", "Tecnologias em Saúde"];
const TIMES = ["Processos", "Mídias"];

export default function CadastroPage() {
  const router = useRouter();
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (senha !== confirmacao) {
      setErro("As senhas não coincidem.");
      return;
    }
    setErro(null);
    // Sem persistência: os dados seguem apenas pela URL para exibição no painel.
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams({
      nome: String(data.get("nome") ?? ""),
      eixo: String(data.get("eixo") ?? ""),
      time: String(data.get("time") ?? ""),
    });
    router.push(`/dashboard?${params}`);
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col px-9 pt-11 pb-10">
      <Logo />

      <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-5">
        <TextField label="Nome" name="nome" placeholder="Insira seu nome..." required />
        <TextField label="E-mail" name="email" type="email" placeholder="Insira seu e-mail..." required />
        <PasswordField label="Senha" name="senha" placeholder="Insira sua senha..." required value={senha} onChange={setSenha} />
        <PasswordField
          label="Senha"
          name="confirmacao"
          placeholder="Insira sua senha novamente..."
          required
          value={confirmacao}
          onChange={setConfirmacao}
        />
        <SelectField label="Eixo" name="eixo" placeholder="Selecione seu eixo..." options={EIXOS} required />
        <SelectField label="Time" name="time" placeholder="Selecione seu time..." options={TIMES} required />

        {erro && <p className="-mt-2 ml-2 text-sm text-red-600">{erro}</p>}

        <div className="mt-2">
          <PrimaryButton>Cadastrar</PrimaryButton>
        </div>
      </form>

      <p className="mt-6 text-center text-sm">
        Já possui conta?{" "}
        <Link href="/login" className="text-blue-600 underline hover:text-blue-800">
          Entrar
        </Link>
      </p>
    </main>
  );
}
