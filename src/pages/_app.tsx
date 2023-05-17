import type { AppProps } from 'next/app';
import "../pages/auth/styles/index.css";
import "../pages/landing/style/index.css";
import "../utils/modals/style/sucess.css";
import "../utils/modals/style/fail.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
