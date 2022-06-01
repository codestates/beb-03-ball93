// import LotteryHistoryView from 'views/LotteryHistoryView'

import { useRecoilValue } from 'recoil'
import {
  lotteryRoundState,
  lotteryRoundStateFromContract,
} from 'recoils/lottery'
import { userTicketsState } from 'recoils/user'

const Account = () => {
  const lotteryRound = useRecoilValue(lotteryRoundState)
  const lotteryRoundContract = useRecoilValue(lotteryRoundStateFromContract)
  const userTickets = useRecoilValue(userTicketsState)
  console.log(lotteryRound)
  console.log(lotteryRoundContract)
  // console.log(lotteryTickets)
  const {
    roundId,
    ticketCounts,
    userCounts,
    winningNumber,
    prizesByRank,
    winnerCountsByRank,
    totalPrizes,
    jackpotCount,
    winners,
    contractConfig,
  } = lotteryRoundContract[0]

  console.log(userTickets)

  // console.log(prizesByRank)

  return (
    <div className='mt-10'>
      <p className='text-3xl'>회차 : {JSON.stringify(roundId)}</p>
      <p className='text-3xl'>구매한 티켓 : {JSON.stringify(userTickets)}</p>
      {/* <div className='flex flex-row justify-center items-center space-x-6 font-bold text-slate-700 text-3xl'> */}
      {/* {userTickets[0].split('').map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full border-2 outline outline-offset-2 outline-4 w-12 h-12 md:w-16 md:h-16 hover:scale-110 hover:cursor-pointer transition      
           ${
             index === 0
               ? 'border-pink-300 outline-pink-500'
               : index === 1
               ? 'border-orange-300 outline-orange-500'
               : index === 2
               ? 'border-lime-300 outline-lime-500'
               : index === 3
               ? 'border-green-300 outline-green-500'
               : index === 4
               ? 'border-blue-300 outline-blue-500'
               : index === 5
               ? 'border-cyan-300 outline-cyan-500'
               : ''
           }`}
          >
            {value}
          </div>
        ))}
      </div> */}
      <p className='text-3xl'>
        총 판매 티켓 수 : {JSON.stringify(ticketCounts)}
      </p>
      <p className='text-3xl'>총 구매 유저 수 : {JSON.stringify(userCounts)}</p>
      <p className='text-3xl'>당첨번호 : {JSON.stringify(winningNumber)}</p>
      <p className='text-3xl'>등수별 당첨금 : {JSON.stringify(prizesByRank)}</p>
      <p className='text-3xl'>총상금 : {JSON.stringify(totalPrizes)}</p>
      <p className='text-3xl'>? : {JSON.stringify(jackpotCount)}</p>
      <p className='text-3xl'>당첨자 : {JSON.stringify(winners)}</p>
      {/* <p>{JSON.stringify(contractConfig)}</p> */}
    </div>
  )
}
export default Account
