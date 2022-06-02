import React, { useEffect, useState } from 'react'
import generateLottery from 'utils/generateLottery'
import NumberBox from 'components/NumberBox/NumberBox'
import { lotteryTicketState } from 'state/lottery'
import { lotteryTicketType } from 'state/types'
import NumberBall from './NumberBall'
import generateUUID from 'utils/generateUUID'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useSigningClient } from 'contexts/cosmwasm'
import { userState } from 'state/user'

interface LotterySelectProps {
  walletAddress: string | null
}

const LotterySelect = () => {
  const [lotteryNumber, setLotteryNumber] = useState<number[]>([
    -1, -1, -1, -1, -1, -1,
  ])
  const [validMaxNumber, setValidMaxNumber] = useState<boolean>(false)
  const user = useRecoilValue(userState)
  const [lotteryTicket, setlotteryTicket] = useRecoilState(lotteryTicketState)

  useEffect(() => {
    setlotteryTicket((prev) => {
      return { ...prev, userId: user.userId, walletAddress: user.walletAddress }
    })
  }, [user])

  const addLotteryTicket = (lotteryNumber: string) => {
    const newNumber = [...lotteryTicket.number, lotteryNumber]
    setlotteryTicket((prev) => {
      return { ...prev, number: newNumber }
    })
  }

  // const [pairNumber, setPairNumber] = useState<number[]>([])
  // const [maxPairNumber, setMaxPairNumber] = useState<boolean>(false)

  // const payAmount = `${currentLotteryTickets.length * 2}.00 TORII`
  // const payButtonDisable = currentLotteryTickets.length === 0 ? true : false

  const maxTickets = lotteryTicket.number?.length === 5 ? true : false

  // const isDisableButton = validMaxNumber && maxPairNumber && !maxTickets
  const isDisableButton = validMaxNumber && !maxTickets

  // console.log(validMaxNumber)

  const sumbitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    // if (validMaxNumber && maxPairNumber) {
    if (validMaxNumber) {
      addLotteryTicket(lotteryNumber.join(''))

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

  const randomNumberHandler = (e: React.MouseEvent) => {
    //. 6개를 다 고른 후 random버튼 클릭 시 form submit 으로 인해 submitHandler가 실행되는 것을 막는다.
    e.preventDefault()
    const randomNumber = generateLottery()
    addLotteryTicket(randomNumber.number.join(''))

    // setCurrentLotteryTickets([...currentLotteryTickets, randomTicket])
  }

  return (
    <div>
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
        <div className='flex flex-row space-x-2 justify-center items-center mb-2 relative z-30'>
          <div>
            <button
              onClick={randomNumberHandler}
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
    </div>
  )
}

export default LotterySelect
