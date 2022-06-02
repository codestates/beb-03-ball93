import React from 'react'
import LotteryCombinationItem from 'components/LotteryArea/LotteryCombinationItem'
import { lotteryTicketState } from 'state/lottery'
import { useRecoilState } from 'recoil'

const LotteryCombinationList = () => {
  const [lotteryTicket, setLotteryTicket] = useRecoilState(lotteryTicketState)

  const removeTicketHandler = (combination: string) => {
    const newNumber = lotteryTicket.number.filter(
      (number) => combination !== number
    )
    setLotteryTicket((prev) => {
      return { ...prev, number: newNumber }
    })
  }

  console.log(lotteryTicket.number.map((el) => console.log(el)))

  return (
    <div className=''>
      <div className='flex flex-col bg-gray-50 w-full items-center justify-center px-16'>
        <div className='relative w-full max-w-xl '>
          <div className='absolute top-32 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob '></div>
          <div className='absolute top-32 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-44 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='m-8 relative space-y-4'>
            {lotteryTicket.number.length > 0 && (
              <span>{`${lotteryTicket.number.length} ticket(s)`}</span>
            )}
            {lotteryTicket.number.map((combination, index) => (
              <LotteryCombinationItem
                key={index}
                combination={combination}
                removeTicketHandler={() => removeTicketHandler(combination)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LotteryCombinationList
