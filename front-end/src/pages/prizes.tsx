import TimeOfDay from 'components/TimeOfDay'
import WinningsTable from 'components/WinningsTable'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { lotteryRoundsState } from 'state/lottery'
import { lotteryRoundType } from 'state/types'

const prizes = () => {
  const [type, setType] = useState('day')
  const [lotteryRounds, setLotteryRounds] =
    useRecoilState<lotteryRoundType[]>(lotteryRoundsState)

  console.log(lotteryRounds)

  const ticketCounts = lotteryRounds[lotteryRounds.length - 1]
    ? lotteryRounds[0].ticketCounts
    : null
  const winnerCountsByRank = lotteryRounds[lotteryRounds.length - 1]
    ? lotteryRounds[0].winnerCountsByRank
    : null
  const prizesByRank = lotteryRounds[lotteryRounds.length - 1]
    ? lotteryRounds[0].prizesByRank
    : null

  return (
    <div className='flex flex-col justify-center items-center space-y-1 pt-4 bg-black-500'>
      <div className='flex-col justify-center items-center rounded-md pt-4 space-y-24 w-full'>
        <WinningsTable
          type={type}
          ticketCounts={ticketCounts}
          winnerCountsByRank={winnerCountsByRank}
          prizesByRank={prizesByRank}
        />
        <TimeOfDay type={type} setType={setType} />
      </div>
    </div>
  )
}

export default prizes
