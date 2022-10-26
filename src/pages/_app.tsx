import '../styles/globals.css'
import type { AppProps } from 'next/app'
import posthog from 'posthog-js'
import DyoHead from '../components/main/dyo-head'

function DyoLanding({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    posthog.init('phc_8yFvAjE43mNrMz0QA6WCNr7fru7NR5p19uEyKKoXMeW', { api_host: 'https://eu.posthog.com' })
  }
  return (
    <>
      <DyoHead />
      <Component {...pageProps} />
    </>
  )
}

export default DyoLanding
