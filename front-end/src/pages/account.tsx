// import LotteryHistoryView from 'views/LotteryHistoryView'

import { useRecoilState } from 'recoil'
import {
  lotteryRoundState,
  lotteryRoundStateFromContract,
} from 'recoils/lottery'
import { userTicketsState } from 'recoils/user'

const Account = () => {
  const [lotteryRound, setLotteryRound] = useRecoilState(lotteryRoundState)
  const [lotteryRoundContract, setLotteryRoundContract] = useRecoilState(
    lotteryRoundStateFromContract
  )
  const [userTickets, setUserTickets] = useRecoilState(userTicketsState)
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

  // console.log(prizesByRank)

  return (
    <div className='mt-10'>
      <p>{JSON.stringify(roundId)}</p>
      <p>{JSON.stringify(userTickets)}</p>
      <p>{JSON.stringify(ticketCounts)}</p>
      <p>{JSON.stringify(userCounts)}</p>
      <p>{JSON.stringify(winningNumber)}</p>
      <p>{JSON.stringify(prizesByRank)}</p>
      <p>{JSON.stringify(totalPrizes)}</p>
      <p>{JSON.stringify(jackpotCount)}</p>
      <p>{JSON.stringify(winners)}</p>
      <p>{JSON.stringify(contractConfig)}</p>
    </div>
  )
}
export default Account
