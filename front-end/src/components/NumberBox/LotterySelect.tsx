import React, { useState } from 'react'

import { Box, Button } from '@mui/material'
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn'

import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuidv4 } from 'uuid'

import generateLottery from 'utils/generateLottery'
import { RootState } from 'store/store'
import NumberBox from 'components/NumberBox/NumberBox'
import { addLotteryTicket } from 'actions/lotteryAction'
import lotteryModel from 'models/lotteryModels'
import PairNumberBox from 'components/NumberBox/PairNumberBox'
import Link from 'next/link'
import Send from 'components/Send'

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
      <div className='flex flex-row space-x-10'>
        <div className='outline outline-offset-4 outline-pink-500 rounded-full w-8'>
          {lotteryNumber[0]}
        </div>
        <div className='outline outline-offset-4 outline-orange-500 rounded-full w-8'>
          {lotteryNumber[1]}
        </div>
        <div className='outline outline-offset-4 outline-lime-500 rounded-full w-8'>
          {lotteryNumber[2]}
        </div>
        <div className='outline outline-offset-4 outline-green-500 rounded-full w-8'>
          {lotteryNumber[3]}
        </div>
        <div className='outline outline-offset-4 outline-blue-500 rounded-full w-8'>
          {lotteryNumber[4]}
        </div>
        <div className='outline outline-offset-4 outline-cyan-500 rounded-full w-8'>
          {lotteryNumber[5]}
        </div>
      </div>
      <Box padding='2rem'>
        <form onSubmit={sumbitHandler}>
          <NumberBox
            lotteryNumber={lotteryNumber}
            setLotteryNumber={setLotteryNumber}
            maxNumber={maxNumber}
            setMaxNumber={setMaxNumber}
            maxTickets={maxTickets}
          />
          {/* <PairNumberBox
          pairNumber={pairNumber}
          setPairNumber={setPairNumber}
          maxPairNumber={maxPairNumber}
          setMaxPairNumber={setMaxPairNumber}
          maxTickets={maxTickets}
        /> */}
          <Box
            sx={{
              display: 'flex',
              margin: '0 1rem 2rem',
              justifyContent: 'space-between',
            }}
          >
            <Button
              onClick={randomTicketHandler}
              disabled={maxTickets}
              variant='outlined'
              type='button'
              color='secondary'
            >
              <ShuffleOnIcon />
            </Button>

            <Button
              variant='outlined'
              type='submit'
              color='secondary'
              disabled={!isDisableButton}
            >
              Add Ticket
            </Button>
          </Box>
        </form>

        {maxTickets && (
          <p style={{ textAlign: 'center' }}>You can only purchase up to 5.</p>
        )}
        <Send />
      </Box>
    </div>
  )
}

export default LotterySelect
