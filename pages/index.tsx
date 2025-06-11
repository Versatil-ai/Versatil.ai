import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Versatil</title>
        <meta name="description" content="Lance ton shop avec l'IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        style={{
          backgroundColor: "#0B0B0F",
          color: "#FFFFFF",
          fontFamily: "'Poppins', sans-serif",
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "1rem 2rem",
            height: "100px",
          }}
        >
          <div className="logo-container">
            <Image
              src="/logo-versatil.png"
              alt="Versatil Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </header>

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
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              background: "linear-gradient(135deg, #7F00FF, #00C3FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            L’outil préféré des E-Commerçants
          </p>
          <h1 style={{ fontSize: "2rem", maxWidth: 600 }}>
            Tu n'es plus qu'à quelques étapes de ta première vente 🚀
          </h1>
        </section>
      </main>

      <style jsx>{`
        .logo-container {
          position: relative;
          width: 220px;
          height: 80px;
        }

        @media (max-width: 768px) {
          .logo-container {
            width: 160px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
}
