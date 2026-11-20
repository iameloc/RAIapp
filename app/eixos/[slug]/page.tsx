import EixoContent from "@/components/EixoContent";

export default async function EixoPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<
    Record<string, string | string[] | undefined>
  >;
}) {
  const { slug } = await params;
  const sp = await searchParams;

  const get = (key: string, fallback: string) =>
    typeof sp[key] === "string" ? sp[key] : fallback;

  const nome = get("nome", "Nome do membro");
  const time = get("time", "Time");
  const eixo = get("eixo", "Eixo");

  return (
    <EixoContent
      slug={slug}
      nome={nome}
      time={time}
      eixo={eixo}
    />
  );
}