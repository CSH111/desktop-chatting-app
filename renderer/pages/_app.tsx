import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// import type {} from ""

const App = ({ Component, pageProps }: AppProps) => {
  const route = useRouter();
  console.log(route, "from App");
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
