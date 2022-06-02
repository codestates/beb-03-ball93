import React, { useCallback, useEffect, useState } from 'react'
import { lotteryGameType, lotteryRoundType } from 'state/types'
import LotteryDetails from 'components/LotteryHistory/LotteryDetails'
import LotterySelect from 'components/NumberBox/LotterySelect'
import Banner from 'components/Layout/Banner'
import Timer from 'components/CountdownTimer/Timer'
import LotteryList from 'components/LotteryArea/LotteryList'
import SendTorii from 'components/SendTorii'
import QueryContract from 'components/QueryContract'
import queryGraphQL, { queryLotteryRounds } from 'utils/queryGraphQL'
import { lotteryRoundsState } from 'state/lottery'
import { useRecoilState } from 'recoil'
import { useSigningClient } from 'contexts/cosmwasm'

const lottery = ({ data }: any) => {
  const { walletAddress } = useSigningClient()
  const [open, setOpen] = useState<boolean>(false)
  const [gameResult, setGameResult] = useState<lotteryGameType | null>(null)
  const [success, setSuccess] = useState<string>('')
  const [error, setError] = useState<string>('')
  // console.log(data.rounds)
  const [lotteryRounds, setLotteryRounds] =
    useRecoilState<lotteryRoundType[]>(lotteryRoundsState)

  useEffect(() => {
    data.rounds.map((item: any) => {
      const round: lotteryRoundType = {
        roundId: item.lottery_id,
        ticketCounts: item.count_ticket,
        userCounts: item.count_user,
        winningNumber: item.get_jackpot[0].round,
        prizesByRank: {
          ...item.jackpot_balance[0],
        },
        totalPrizes: item.balance,
        winnerCountsByRank: [...item.jackpot_count],
        winners: [...item.winner],
      }
      setLotteryRounds((prev) => {
        const temp = [...prev]
        temp.push(round)
        temp.sort((a, b) => {
          return a.roundId - b.roundId
        })
        temp.filter(
          (item, index, callback) =>
            index === callback.findIndex((t) => t.roundId === item.roundId)
        )
        return temp
      })
    })
  }, [data])

  const totalPrizes = lotteryRounds[lotteryRounds.length - 1]
    ? lotteryRounds[lotteryRounds.length - 1].totalPrizes
    : null

  return (
    <div className='flex flex-col'>
      <div className='flex-col justify-center items-center rounded-md pt-4 w-full'>
        <Banner totalPrizes={totalPrizes} />
        <Timer />
      </div>
      <h1 className='text-3xl md:text-5xl bg-clip-text text-transparent font-semibold leading-tight bg-gradient-to-r from-teal-400 to-blue-500 my-2 mb-6'>
        Guess you're in luck today. <br />
        Just pick it!
      </h1>
      <LotterySelect walletAddress={walletAddress} />
      <LotteryList />
      <SendTorii setSuccess={setSuccess} setError={setError} />
      <QueryContract />
    </div>
  )
}

export default lottery

export async function getStaticProps() {
  const { data } = await queryGraphQL(queryLotteryRounds)

  return {
    props: {
      data,
    },
  }
}
