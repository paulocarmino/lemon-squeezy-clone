import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FiMenu, FiSearch, FiEye, FiBookOpen } from 'react-icons/fi'

import { setNameInitials } from '@/utils/helpers'

const ButtonIcon = ({ icon }: any) => {
  return (
    <div className="flex justify-center items-center mr-3 w-10 h-10 text-gray-900 hover:bg-gray-100 rounded-md cursor-pointer">
      {icon}
    </div>
  )
}

const Header = ({ headerTitle, userFullName }: any) => {
  return (
    <div className='flex w-full text-xl'>
      <div className='flex items-center font-medium'>
        <ButtonIcon icon={<FiMenu />} />
        <h1 className="text-2xl">{headerTitle}</h1>
      </div>

      <div className='flex justify-end items-center w-full'>
        <ButtonIcon icon={<FiSearch />} />
        <ButtonIcon icon={<FiEye />} />
        <ButtonIcon icon={<FiBookOpen />} />


        <Menu as="div" className="inline-block relative text-left">
          <div>
            <Menu.Button className="inline-flex justify-cente">
              <ButtonIcon icon={<span className="inline-flex justify-center items-center w-7 h-7 bg-gray-500 rounded-full">
                <span className="text-xs font-medium leading-none text-white">{setNameInitials(userFullName)}</span>
              </span>} />
            </Menu.Button>
          </div>

          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-32 bg-white rounded-md focus:outline-none ring-1 ring-black shadow-lg origin-top-right ring-opacity-5">
              <div className="py-1">
                <Menu.Item>
                  <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">
                    My orders
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">
                    Account
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a onClick={() => signOut({ callbackUrl: '/auth/login' })} href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">
                    Logout
                  </a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <AiFillPlusCircle className='ml-2 text-[2.7rem] text-primary-500 transition-transform delay-[0.2ms] hover:scale-[1.1] cursor-pointer' />
      </div>

    </div>
  )
}

export default Header
