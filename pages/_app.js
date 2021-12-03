import Layout from "../components/Layout";
import "../styles/globals.css";
import { ContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
