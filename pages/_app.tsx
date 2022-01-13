import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}