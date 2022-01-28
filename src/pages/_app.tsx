import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import Template from '@/components/Template'


type ComponentCustom = {
  template: "none" | null
} & React.Component

type AppPropsCustom = {
  Component: ComponentCustom
} & AppProps

function MyApp({ Component, pageProps: { session, template, ...pageProps } }: AppPropsCustom) {
  const templateFromPage = Component.template

  if (templateFromPage !== 'none') {
    return (
      <Template>
        <Component {...pageProps} />
      </Template>
    )
  } else {
    return <Component {...pageProps} />

  }

}

export default MyApp
