import { Inter } from 'next/font/google'
import SignIn from './auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SignIn/>
    </>
  )
}
