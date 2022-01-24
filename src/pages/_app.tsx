import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import LeftMenu from '@/components/LeftMenu'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'People', href: '/people' },
  {
    name: 'Store',
    children: [
      { name: 'Products', href: '/products' },
      { name: 'Orders', href: '/orders' },
    ],
  },
  {
    name: 'Reports',
    children: [
      { name: 'All time', href: '/all-time' },
      { name: 'By month', href: '/by-month' },
    ],
  }
]

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex'>
        <div className="min-w-[280px]">
          <LeftMenu navigation={navigation} />
        </div>
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  )
}

export default MyApp
