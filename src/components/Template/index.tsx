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
  return (<div className='flex'>
    <div className="min-w-[280px]">
      <LeftMenu navigation={navigation} />
    </div>
    <div className="flex-1 py-6 px-12">
      <Header headerTitle={headerTitle} />
      {children}
    </div>
  </div>)
}

export default Template
