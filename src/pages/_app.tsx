import type { AppProps } from "next/app";
import Head from "next/head";
import "./globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Terumichi Ishibashi Portfolio</title>
        <meta name="description" content="The web development portfolio of Terumichi Ishibashi." />
      </Head>
      <div className="antialiased">
        <Component {...pageProps} />
      </div>
    </>
  );
}