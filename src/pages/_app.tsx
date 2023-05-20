import type { AppProps } from 'next/app';
import "../styles/channel.css";
import "../styles/chat.css";
import "../utils/ui/modals/style/fail.css";
import "../utils/ui/modals/style/sucess.css";
import "../utils/ui/layout/index.css";
import "../styles/landing.css";
import "../styles/index.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
