import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Versatil</title>
        <meta name="description" content="Lance ton shop avec l'IA" />
      </Head>

      <main
        style={{
          backgroundColor: "#0B0B0F",
          color: "#FFFFFF",
          fontFamily: "'Poppins', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* Header / Logo */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 2rem",
          }}
        >
          <Image
            src="/logo-versatil.png"
            alt="Logo Versatil"
            width={160}
            height={160}
            priority
          />
        </header>

        {/* Accueil */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem 2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", maxWidth: 600 }}>
            Tu n'es plus qu'à quelques étapes de ta première vente
          </h1>

          <a
            href="#"
            style={{
              marginTop: "2rem",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              backgroundImage: "linear-gradient(135deg, #7F00FF, #00C3FF)",
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            Commencer maintenant
          </a>
        </section>
      </main>
    </>
  );
}
