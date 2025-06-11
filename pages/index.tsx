import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <Image
        src="/logo-versatil.png"
        alt="Logo Versatil"
        width={160}
        height={160}
      />
      <h1 style={{ fontSize: 32, marginTop: 20 }}>
        Bienvenue sur Versatil 🚀
      </h1>
      <p>Votre projet Next.js + TypeScript est prêt à être personnalisé.</p>
    </div>
  );
}