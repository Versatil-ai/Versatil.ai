import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Versatil</title>
        <meta name="description" content="Lance ton shop avec l'IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          backgroundColor: "#0B0B0F",
          color: "#FFFFFF",
          fontFamily: "'Poppins', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* Header avec logo */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "1rem 2rem",
            height: "80px",
            backgroundColor: "#0B0B0F",
            borderBottom: "1px solid #1c1c1c",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div className="logo-container">
            <Image
              src="/logo-versatil.png"
              alt="Logo Versatil"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </header>

        {/* Section principale */}
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
          {/* Accroche avec dégradé */}
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              background: "linear-gradient(135deg, #7F00FF, #00C3FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: "center",
              marginBottom: "1rem",
              lineHeight: 1.4,
              maxWidth: 300,
            }}
          >
            L’outil préféré des E-Commerçants
          </p>

          {/* Titre principal */}
          <h1 style={{ fontSize: "2rem", maxWidth: 600, marginBottom: "2rem" }}>
            Tu n'es plus qu'à quelques étapes de ta première vente
          </h1>

          {/* CTA */}
          <a
            href="#"
            style={{
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

      {/* Responsive logo sizes */}
      <style jsx>{`
        .logo-container {
          position: relative;
          width: 180px;
          height: 60px;
        }

        @media (max-width: 768px) {
          .logo-container {
            width: 160px;
            height: 55px;
          }

          h1 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
