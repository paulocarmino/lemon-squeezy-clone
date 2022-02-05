const products = [
  { name: 'Um novo produto', price: '$9.99', status: 'Published', totalSales: '3', totalRevenue: '$30' },
  { name: 'produto legal', price: '$9.99', status: 'Published', totalSales: '8', totalRevenue: '$89' },
]

export default function ProductsPage() {
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
                {products.map((product) => (
                  <tr key={product.name} className="group">
                    <td className="flex items-center py-3 px-6 text-sm text-gray-900 whitespace-nowrap group-hover:bg-gray-100 cursor-pointer">
                      <div className="shrink-0 mr-2 w-8 h-6 bg-gray-200 bg-center bg-no-repeat bg-cover rounded-[4px]"></div>
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
    </div>
  )
}

ProductsPage.headerTitle = "Products"

