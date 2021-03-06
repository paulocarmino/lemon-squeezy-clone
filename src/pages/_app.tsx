import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

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
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
          }}
        >
          <Template headerTitle={headerTitleFromPage}>
            <Component {...pageProps} />
          </Template>
        </SWRConfig>
      </SessionProvider>
    )
  } else {
    return <SessionProvider session={session}><Component {...pageProps} /></SessionProvider>
  }

}

export default MyApp
