import { AiFillPlusCircle } from 'react-icons/ai'
import { FiMenu, FiSearch, FiEye, FiBookOpen } from 'react-icons/fi'

const ButtonIcon = ({ icon }: any) => {
  return (
    <div className="flex justify-center items-center mr-3 w-10 h-10 text-gray-900 hover:bg-gray-100 rounded-md cursor-pointer">
      {icon}
    </div>
  )
}

const Header = () => (
  <div className='flex w-full text-xl'>
    <ButtonIcon icon={<FiMenu />} />

    <div className='flex justify-end items-center w-full'>
      <ButtonIcon icon={<FiSearch />} />
      <ButtonIcon icon={<FiEye />} />
      <ButtonIcon icon={<FiBookOpen />} />

      <ButtonIcon icon={<span className="block w-6 h-6">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 w-full h-full svg-avatar">
            <img
              src="https://www.gravatar.com/avatar/ffe37048261e208fe0066596e2d0023c?d=blank"
              alt=""
              className="block absolute inset-0 w-full h-full rounded-full"
            />
          </div>
        </div>
      </span>} />

      <AiFillPlusCircle className='ml-2 text-[2.7rem] text-primary-500 transition-transform delay-[0.2ms] hover:scale-[1.1] cursor-pointer' />
    </div>

  </div>
)

export default Header
