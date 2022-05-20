import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/store'
import LotteryTicketItem from 'components/LotteryArea/LotteryTicketItem'
import { removeLotteryTicket } from 'actions/lotteryAction'

const LotteryTicketList = () => {
  const lotteryTicket = useSelector(
    (state: RootState) => state.lottery.lotteryInput
  )

  const dispatch = useDispatch()
  const removeTicketHandler = (id: string) => {
    dispatch(removeLotteryTicket(id))
  }

  return (
    <div>
      <div className='flex flex-col bg-gray-50 w-full items-center justify-center px-16'>
        <div className='relative w-full max-w-xl'>
          <div className='absolute top-32 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob '></div>
          <div className='absolute top-32 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-44 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='m-8 relative space-y-4'>
            <span>{`${lotteryTicket.length} ticket(s)`}</span>
            {lotteryTicket.map((ticket) => (
              <LotteryTicketItem
                key={ticket.id}
                ticket={ticket}
                removeTicketHandler={removeTicketHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LotteryTicketList
