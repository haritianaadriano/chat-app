import type { AppProps } from 'next/app'
import "../pages/auth/styles/auth.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
