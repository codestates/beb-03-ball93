// import { lotteryTicketType } from 'state/types'
import { RiDeleteBin2Line } from 'react-icons/ri'
import Lottery from 'components/LotteryArea/Lottery'

interface LotteryItemProps {
  combination: any
  // ticket: lotteryTicketType
  removeTicketHandler: (id: string) => void
}

const LotteryItem = ({
  combination,
  removeTicketHandler,
}: LotteryItemProps) => {
  return (
    <div>
      <div className='p-5 bg-[#ffffffbc] rounded-lg flex items-center justify-between space-x-8'>
        <div className='flex-1'>
          <div className='h-4 w-48 bg-gray-300 rounded'>
            <Lottery combination={combination} />
          </div>
        </div>
        <div>
          <div
            className='w-24 h-6 rounded-lg bg-purple-300 hover:cursor-pointer flex justify-center items-center'
            onClick={() => removeTicketHandler(combination)}
          >
            <RiDeleteBin2Line />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LotteryItem
