import type { AppProps } from 'next/app'
import "../pages/auth/styles/auth.css"
import "../utils/modals/index.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
