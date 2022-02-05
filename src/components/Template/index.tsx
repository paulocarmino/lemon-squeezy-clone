import { useSession } from "next-auth/react"

import Header from "../Header"
import LeftMenu from "../LeftMenu"

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

const Template = ({ children, headerTitle }: any) => {
  const { data: session } = useSession()
  const userFullName = session?.user?.name

  return (<div className='flex'>
    <div className="min-w-[280px]">
      <LeftMenu navigation={navigation} />
    </div>
    <div className="flex flex-col flex-1 py-6 px-16 max-h-screen">
      <Header headerTitle={headerTitle} userFullName={userFullName} />
      {children}
    </div>
  </div>)
}

export default Template
