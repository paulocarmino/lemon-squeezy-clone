import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { ChevronUpIcon, CurrencyDollarIcon, EyeIcon, PlusIcon, CogIcon, LibraryIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import clsxm from '@/utils/clsxm'
import checkCurrentsPath from '@/utils/navigation'


const LemonSqueezyLogo = () => {
  return (<svg className="" width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.44011 24.4129L15.506 28.1336C16.5057 28.595 17.2114 29.3693 17.5924 30.2575C18.5563 32.5067 17.239 34.8071 15.1709 35.6343C13.1025 36.4613 10.8981 35.9291 9.89582 33.5901L6.38556 25.3782C6.11354 24.7416 6.79687 24.1162 7.44011 24.4129" fill="#FFC233"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.92482 22.0046L16.2509 18.8643C19.018 17.8206 22.0408 19.7953 22 22.6646C21.9994 22.7021 21.9987 22.7395 21.9977 22.7773C21.938 25.5714 18.9993 27.4494 16.293 26.4609L7.93271 23.4078C7.26581 23.1644 7.26088 22.255 7.92482 22.0046" fill="#FFC233"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.45767 20.9168L15.6425 17.4468C18.3623 16.2936 19.0525 12.8325 16.9224 10.8326C16.8945 10.8063 16.8666 10.7803 16.8383 10.7543C14.7499 8.82013 11.2974 9.50112 10.1085 12.0487L6.43564 19.9194C6.14259 20.5471 6.8049 21.1935 7.45767 20.9168" fill="#FFC233"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.35143 19.5456L8.32719 11.4044C8.69612 10.395 8.62779 9.36556 8.24637 8.47734C7.28051 6.22905 4.66482 5.50331 2.5971 6.33186C0.529704 7.16073 -0.638522 9.04315 0.365771 11.3812L3.89903 19.5843C4.17302 20.2199 5.11424 20.1948 5.35143 19.5456" fill="#FFC233"></path>
  </svg>)
}

type LeftMenuProps = {
  navigation: any
}

export default function LeftMenu({ navigation }: LeftMenuProps) {
  let [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

  let { styles, attributes } = usePopper(referenceElement, popperElement,
    {
      placement: 'top-end', modifiers: [{
        name: 'offset',
        options: { offset: [0, 8] }
      }]
    })

  const router = useRouter()
  const updatedNavigation = checkCurrentsPath(navigation, router)

  return (
    <div className="flex flex-col grow px-4 pt-5 pb-4 min-h-screen bg-gray-100">
      <div className="flex shrink-0 items-center px-4 mb-5">
        <LemonSqueezyLogo />
      </div>

      <div className="flex flex-col grow mt-5">
        <nav className="flex-1 px-2 space-y-1 bg-gray-100" aria-label="Sidebar">
          {updatedNavigation.map((item: any) =>
            !item.children ? (
              <div key={item.name}>
                <Link href={item.href} passHref>
                  <a
                    data-testid="menu-item"
                    className={clsxm(
                      'bg-gray-100 text-gray-900 hover:bg-gray-200 group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md cursor-pointer',
                      item.current && 'bg-gray-200 text-primary-500'
                    )}
                  >
                    {item?.name}
                  </a>
                </Link>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1" defaultOpen={item.current ? true : false}>
                {({ open }) => {
                  return (
                    <>
                      <Disclosure.Button
                        className={clsxm(
                          'bg-gray-100 text-gray-900 hover:bg-gray-200',
                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none'
                        )}
                        data-testid="submenu"
                      >
                        <span className="flex-1">{item.name}</span>
                        <ChevronUpIcon
                          className={`${open && 'transform rotate-180'
                            } w-5 h-5 text-gray-900`}
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="space-y-1" data-testid="submenu-content">
                        {item.children.map((subItem: any) => (
                          <Link href={subItem.href} key={subItem.name} passHref>
                            <a
                              data-testid="submenu-item"
                              className={clsxm(
                                'bg-gray-100 text-gray-500 hover:bg-gray-200 group flex items-center p-2 w-full text-sm rounded-md cursor-pointer',
                                subItem.current && 'bg-gray-200 text-primary-500 font-medium'

                              )}
                            >
                              {subItem?.name}
                            </a>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )
                }}
              </Disclosure>
            )
          )}
        </nav>
      </div>

      <Popover as="div" className="inline-block relative text-left">
        <Popover.Button ref={setReferenceElement} className="flex w-full">
          <div className="group flex justify-between items-center p-2 mx-2 w-full text-sm font-medium text-left text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none">
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" version="1.1">
                <circle fill="#00ACFF" width="64" height="64" cx="32" cy="32" r="32"></circle>
                <text x="50%" y="50%" textAnchor="middle" fontSize="38" fontWeight="600" dy=".1em" dominantBaseline="middle" fill="#ffffff">O</text></svg>

              <span className='ml-3'>orangeInc</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
        </Popover.Button>

        <Transition
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className="absolute !right-[0.5rem] w-[232px] bg-white rounded-md divide-y divide-gray-100 focus:outline-none ring-1 ring-black shadow-lg origin-top-right ring-opacity-5">
            <div className="py-1">
              <a href="#" className="group flex items-center py-2 px-4 text-sm text-gray-900 hover:bg-gray-100">
                <div className='flex justify-between items-center w-full'>
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 64 64" version="1.1">
                      <circle fill="#00ACFF" width="64" height="64" cx="32" cy="32" r="32"></circle>
                      <text x="50%" y="50%" textAnchor="middle" fontSize="38" fontWeight="600" dy=".1em" dominantBaseline="middle" fill="#ffffff">O</text></svg>

                    <span className='ml-3'>orangeInc</span>
                  </div>

                  <CheckCircleIcon className="mr-3 w-7 h-7 text-primary-500 group-hover:text-primary-400" aria-hidden="true" />
                </div>
              </a>
              <a href="#" className="group flex items-center py-[0.4rem] px-4 text-sm text-gray-900 hover:bg-gray-100">
                <PlusIcon className="mr-3 w-5 h-5 text-gray-700" aria-hidden="true" />
                New Store
              </a>
            </div>
            <div className="py-1">
              <a href="#" className="group flex items-center py-[0.4rem] px-4 text-sm text-gray-900 hover:bg-gray-100">
                <CogIcon className="mr-3 w-5 h-5 text-gray-700" aria-hidden="true" />
                Store Settings
              </a>

              <a href="#" className="group flex items-center py-[0.4rem] px-4 text-sm text-gray-900 hover:bg-gray-100">
                <LibraryIcon className="mr-3 w-5 h-5 text-gray-700" aria-hidden="true" />
                Payouts
              </a>

              <a href="#" className="group flex items-center py-[0.4rem] px-4 text-sm text-gray-900 hover:bg-gray-100">
                <CurrencyDollarIcon className="mr-3 w-5 h-5 text-gray-700" aria-hidden="true" />
                Billing Details
              </a>

              <a href="#" className="group flex items-center py-[0.4rem] px-4 text-sm text-gray-900 hover:bg-gray-100">
                <EyeIcon className="mr-3 w-5 h-5 text-gray-700" aria-hidden="true" />
                View Store
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>


    </div>
  )
}
