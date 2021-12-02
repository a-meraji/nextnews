import Layout from "../components/Layout";
import "../styles/globals.css";
import {ContextProvider} from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    </Layout>
  );
}

export default MyApp;
