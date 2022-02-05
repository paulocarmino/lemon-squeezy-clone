import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import Template from '@/components/Template'


type ComponentCustom = {
  template: "none" | null
  headerTitle: "none" | null
} & React.Component

type AppPropsCustom = {
  Component: ComponentCustom
} & AppProps

function MyApp({ Component, pageProps: { session, template, headerTitle, ...pageProps } }: AppPropsCustom) {
  const templateFromPage = Component.template
  const headerTitleFromPage = Component.headerTitle

  if (templateFromPage !== 'none') {
    return (
      <SessionProvider session={session}>
        <Template headerTitle={headerTitleFromPage}>
          <Component {...pageProps} />
        </Template>
      </SessionProvider>
    )
  } else {
    return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>

  }

}

export default MyApp
