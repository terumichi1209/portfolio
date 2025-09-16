import type { AppProps } from "next/app";
import Head from "next/head";
import "./globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Terumichi Ishibashi Portfolio</title>
        <meta name="description" content="The web development portfolio of Terumichi Ishibashi." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono&display=swap" />
      </Head>
      <div className="antialiased">
        <Component {...pageProps} />
      </div>
    </>
  );
}