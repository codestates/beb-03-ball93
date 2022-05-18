import Link from 'next/link'
import lotteryDraw from 'utils/lotterydraw'
import { HiExternalLink } from 'react-icons/hi'
import { BsTrophy } from 'react-icons/bs'

const Banner = () => {
  return (
    <div className='container flex flex-row justify-center bg-gray-100 rounded-md py-2 w-full'>
      <BsTrophy className='animate-purse w-20 h-10 mx-2 my-3	text-cyan-500 ' />
      <div className='flex flex-col justify-center space-y-1'>
        <div className='text-left text-xl font-normal leading-none tracking-wide'>
          <span
            className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500 
  via-purple-500 animate-gradient-xy'
          >
            Become the protagonist of a life-changing event
          </span>
        </div>
        <div className='text-left text-stone-700'>
          Get DecentralLotto now until {lotteryDraw()}
          <Link href='/docs'>
            <a className='text-[#66C1BD] underline whitespace-nowrap'>
              &nbsp;Learn more
              {/* <HiExternalLink /> */}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Banner
