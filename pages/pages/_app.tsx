import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
