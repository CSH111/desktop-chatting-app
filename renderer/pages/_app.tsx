import type { AppProps } from "next/app";
import { Reset } from "styled-reset";
import { Layout, SideBar } from "../components";
import "../styles/globalStyle.css";
import { AuthContextProvider } from "../context/AuthContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <Reset />
      <Layout side={<SideBar />} main={<Component {...pageProps} />}></Layout>
    </AuthContextProvider>
  );
};

export default App;
