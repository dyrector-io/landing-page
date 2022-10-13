import "../styles/globals.css";
import type { AppProps } from "next/app";
import DyoHead from "../components/main/dyo-head";

function DyoLanding({ Component, pageProps }: AppProps) {
  return <>
    <DyoHead />
    <Component {...pageProps} />;
  </>
}

export default DyoLanding;
