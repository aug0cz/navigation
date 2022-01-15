import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-light-200 dark:bg-dark-700">
      <Component {...pageProps} />
    </div>
  )
}
