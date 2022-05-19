import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import generateLottery from 'utils/generateLottery'
import { RootState } from 'store/store'
import NumberBox from 'components/NumberBox/NumberBox'
import { addLotteryTicket } from 'actions/lotteryAction'
import lotteryModel from 'models/lotteryModels'
import PairNumberBox from 'components/NumberBox/PairNumberBox'
import LotteryTicketList from 'components/LotteryArea/LotteryTicketList'
import Link from 'next/link'
import Send from 'components/Send'
import clsx from 'clsx'

interface LotterySelectProps {
  payHandler: () => void
}

const LotterySelect = ({ payHandler }: LotterySelectProps) => {
  const [lotteryNumber, setLotteryNumber] = useState<number[]>([])
  const [maxNumber, setMaxNumber] = useState<boolean>(false)

  const [pairNumber, setPairNumber] = useState<number[]>([])
  const [maxPairNumber, setMaxPairNumber] = useState<boolean>(false)

  const lotteryTicket = useSelector(
    (state: RootState) => state.lottery.lotteryInput
  )

  const dispatch = useDispatch()

  const payAmount = `${lotteryTicket.length * 2}.00 TORII`
  const payButtonDisable = lotteryTicket.length === 0 ? true : false

  const maxTickets = lotteryTicket.length === 5 ? true : false

  const isDisableButton = maxNumber && maxPairNumber && !maxTickets

  const sumbitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const lotteryTicket: lotteryModel = {
      number: lotteryNumber,
      // number: lotteryNumber.sort((a, b) => a - b),
      // pairNumber: pairNumber.sort((a, b) => a - b),
      id: uuidv4(),
    }

    // Add ticket to Redux
    if (maxNumber && maxPairNumber) {
      dispatch(addLotteryTicket(lotteryTicket))

      // Reset
      setLotteryNumber([])
      setMaxNumber(false)
      setPairNumber([])
      setMaxPairNumber(false)
    }
  }

  const randomTicketHandler = () => {
    const randomTicket = generateLottery()
    dispatch(addLotteryTicket(randomTicket))
  }

  return (
    <div>
      <div className='flex flex-row justify-center items-center space-x-6 font-bold text-slate-700 text-3xl'>
        <span className='border-2 border-pink-300 outline outline-pink-500 outline-offset-2 outline-4 rounded-full w-14 h-14  flex items-center justify-center'>
          {lotteryNumber[0]}
        </span>
        <span className='border-2 border-orange-300 outline outline-orange-500 outline-offset-2 outline-4 rounded-full w-14 h-14  flex items-center justify-center'>
          {lotteryNumber[1]}
        </span>
        <span className='border-2 border-lime-300 outline outline-lime-500 outline-offset-2 outline-4 rounded-full w-14 h-14  flex items-center justify-center'>
          {lotteryNumber[2]}
        </span>
        <span className='border-2 border-green-300 outline outline-green-500 outline-offset-2 outline-4 rounded-full w-14 h-14  flex items-center justify-center'>
          {lotteryNumber[3]}
        </span>
        <span className='border-2 border-blue-300 outline outline-blue-500 outline-offset-2 outline-4 rounded-full w-14 h-14  flex items-center justify-center'>
          {lotteryNumber[4]}
        </span>
        <span className='border-2 border-cyan-300 outline outline-cyan-500 outline-offset-2 outline-4 rounded-full w-14 h-14  flex items-center justify-center'>
          {lotteryNumber[5]}
        </span>
      </div>
      <form onSubmit={sumbitHandler}>
        <NumberBox
          lotteryNumber={lotteryNumber}
          setLotteryNumber={setLotteryNumber}
          maxNumber={maxNumber}
          setMaxNumber={setMaxNumber}
          maxTickets={maxTickets}
        />
        <button onClick={randomTicketHandler}></button>
      </form>

      {maxTickets && (
        <p style={{ textAlign: 'center' }}>You can only purchase up to 5.</p>
      )}
      <LotteryTicketList />
      <Send />
    </div>
  )
}

export default LotterySelect
