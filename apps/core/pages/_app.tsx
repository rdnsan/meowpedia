import "../styles/globals.css";
import "antd/dist/reset.css";
import { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { ConfigProvider, ThemeConfig } from "antd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#ff6f00",
    fontFamily: "'__Inter_4b5723', '__Inter_Fallback_4b5723'",
  },
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === "web-vital") console.table(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <title>Meowpedia</title>
      </Head>
      <ConfigProvider theme={theme}>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </ConfigProvider>
    </>
  );
}
