import React, { useCallback, useState } from 'react'
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
import NumberBall from './NumberBall'

interface LotterySelectProps {
  payHandler: () => void
}

const LotterySelect = ({ payHandler }: LotterySelectProps) => {
  const [lotteryNumber, setLotteryNumber] = useState<number[]>([
    -1, -1, -1, -1, -1, -1,
  ])
  const [validMaxNumber, setValidMaxNumber] = useState<boolean>(false)

  // const [pairNumber, setPairNumber] = useState<number[]>([])
  // const [maxPairNumber, setMaxPairNumber] = useState<boolean>(false)

  const lotteryTicket = useSelector(
    (state: RootState) => state.lottery.lotteryInput
  )

  const dispatch = useDispatch()

  const payAmount = `${lotteryTicket.length * 2}.00 TORII`
  const payButtonDisable = lotteryTicket.length === 0 ? true : false

  const maxTickets = lotteryTicket.length === 5 ? true : false

  // const isDisableButton = validMaxNumber && maxPairNumber && !maxTickets
  const isDisableButton = validMaxNumber && !maxTickets

  console.log(validMaxNumber)

  const sumbitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const lotteryTicket: lotteryModel = {
      number: lotteryNumber,
      // number: lotteryNumber.sort((a, b) => a - b),
      // pairNumber: pairNumber.sort((a, b) => a - b),
      id: uuidv4(),
    }
    // if (validMaxNumber && maxPairNumber) {
    if (validMaxNumber) {
      dispatch(addLotteryTicket(lotteryTicket))

      // Reset
      setLotteryNumber([-1, -1, -1, -1, -1, -1])
      setValidMaxNumber(false)
      // setPairNumber([])
      // setMaxPairNumber(false)
    }
  }
  const deleteLotteryNumber = (index: number) => {
    let currentNumber = [...lotteryNumber]
    currentNumber.splice(index, 1, -1)
    setLotteryNumber(currentNumber)
  }

  const randomTicketHandler = () => {
    const randomTicket = generateLottery()
    dispatch(addLotteryTicket(randomTicket))
  }

  return (
    <div className=''>
      <NumberBall
        lotteryNumber={lotteryNumber}
        deleteLotteryNumber={deleteLotteryNumber}
      />
      <form onSubmit={sumbitHandler}>
        <NumberBox
          lotteryNumber={lotteryNumber}
          setLotteryNumber={setLotteryNumber}
          validMaxNumber={validMaxNumber}
          setValidMaxNumber={setValidMaxNumber}
          maxTickets={maxTickets}
        />
        <div className='flex flex-row space-x-2 justify-center items-center mb-2 relative z-50'>
          <div>
            <button
              onClick={randomTicketHandler}
              disabled={maxTickets}
              className='btn btn-secondary'
            >
              RANDOM
            </button>
          </div>
          <div>
            <button
              type='submit'
              disabled={!isDisableButton}
              className='btn btn-secondary'
            >
              ADD TICKET
            </button>
          </div>
        </div>
      </form>

      {maxTickets ||
        (!isDisableButton && <p className=''>Please choose 6 numbers</p>)}
      {maxTickets && <p className=''>You can only purchase up to 5 tickets</p>}
      <LotteryTicketList />
      <Send />
    </div>
  )
}

export default LotterySelect
