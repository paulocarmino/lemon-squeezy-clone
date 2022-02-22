import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import getProducts from "@/queries/getProducts"

export default function ProductsPage() {
  const [open, setOpen] = useState(true)
  const { products, isLoading, isError } = getProducts()

  const handleClick = (product: any) => {
    setOpen(true)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  return (
    <div className="flex flex-col mt-8">
      <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full align-middle sm:px-6 lg:px-6">
          <div className="overflow-hidden">
            <table className="table min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="py-3 px-6 font-medium text-left text-black last:rounded-r-md first:rounded-l-md text-md">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6 font-normal text-left text-gray-700 last:rounded-r-md first:rounded-l-md text-md">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6 font-normal text-left text-gray-700 last:rounded-r-md first:rounded-l-md text-md">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 font-normal text-left text-gray-700 whitespace-nowrap last:rounded-r-md first:rounded-l-md text-md">
                    Total Sales
                  </th>
                  <th scope="col" className="py-3 px-6 font-normal text-left text-gray-700 whitespace-nowrap last:rounded-r-md first:rounded-l-md text-md">
                    Total Revenue
                  </th>
                  <th scope="col" className="relative py-3 px-6 whitespace-nowrap last:rounded-r-md first:rounded-l-md">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products?.map((product: any) => (
                  <tr key={product.name} onClick={() => handleClick(product)} className="group">
                    <td className="flex items-center py-3 px-6 text-sm text-gray-900 whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">
                      <div className="shrink-0 mr-2 w-8 h-6 bg-gray-200 bg-center bg-no-repeat bg-cover rounded-[4px]">
                        <img src={product.photos[0]} />
                      </div>
                      {product.name}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-900 whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">{product.price}</td>
                    <td className="py-3 px-6 w-full text-sm text-gray-900 whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-wtf-emerald">
                          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 fill-current">
                            <circle cx="12" cy="12" r="3" fill="#2DCA72"></circle>
                          </svg>
                        </span>
                        {product.status}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-sm text-right text-gray-900 whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">{product.totalSales}</td>
                    <td className="py-3 px-6 text-sm text-right text-gray-900 whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">{product.totalRevenue}</td>
                    <td className="py-3 px-6 text-sm font-medium text-right whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">
                      <div className="flex">
                        <a href="#" className="mr-8">
                          Share
                        </a>
                        <a href="#" className=" ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="overflow-hidden fixed inset-0" onClose={setOpen}>
          <div className="overflow-hidden absolute inset-0">
            <Dialog.Overlay className="absolute inset-0 bg-gray-200/40" />

            <div className="flex fixed inset-y-0 right-0 pl-10 max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-200 sm:duration-200"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200 sm:duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-xl">
                  <div className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
                    <div className="flex overflow-y-scroll flex-col flex-1 py-6 min-h-0">
                      <div className="px-4 sm:px-6">
                        <div className="flex justify-between items-start">
                          <Dialog.Title className="text-2xl font-medium text-gray-900">Product Details</Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="w-6 h-6 text-gray-900" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 px-4 mt-6 sm:px-6">

                      </div>
                    </div>
                    <div className="flex shrink-0 justify-end p-4">
                      <button
                        type="button"
                        className="py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 ml-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

ProductsPage.headerTitle = "Products"

