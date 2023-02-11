import type { AppProps } from "next/app";
import { Reset } from "styled-reset";
import { useRouter } from "next/router";
import { Layout, SideBar } from "../components";
import "../styles/globalStyle.css";
// import type {} from ""

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Reset />
      <Layout side={<SideBar />} main={<Component {...pageProps} />}></Layout>
    </>
  );
};

export default App;
