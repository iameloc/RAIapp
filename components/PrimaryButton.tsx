export default function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full rounded-2xl bg-navy py-1.5 text-3xl font-bold text-white transition hover:bg-navy/90 active:scale-[0.99]"
    >
      {children}
    </button>
  );
}
