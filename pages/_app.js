import "../styles/globals.css";
import Head from "next/head";
import Layout from "../src/components/layout";
import { Provider } from "react-redux";
import { wrapper, store } from "../src/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer theme="colored" />
        </Layout>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
