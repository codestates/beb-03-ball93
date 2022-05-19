import React, { useEffect } from 'react'

const numberArray10 = Array.from({ length: 10 }, (_, i) => i)

interface NumberBoxProps {
  lotteryNumber: number[]
  setLotteryNumber: React.Dispatch<React.SetStateAction<number[]>>
  maxNumber: boolean
  setMaxNumber: React.Dispatch<React.SetStateAction<boolean>>
  maxTickets: boolean
}

const NumberBox = ({
  lotteryNumber,
  setLotteryNumber,
  maxNumber,
  setMaxNumber,
  maxTickets,
}: NumberBoxProps) => {
  const selectNumberHandler = (numberInput: number) => {
    const currentNumber = [...lotteryNumber]
    // 같은 숫자 중복으로 못고르게 하기
    // const exitedNumberIndex = currentNumber.findIndex(
    //   (number) => number === numberInput
    // )
    // const exitedNumber = currentNumber[exitedNumberIndex]
    let updatedNumber: number[]
    // if (exitedNumber) {
    //   currentNumber.splice(exitedNumberIndex, 1)
    //   updatedNumber = [...currentNumber]
    //   setLotteryNumber(updatedNumber)
    // } else {
    updatedNumber = [...currentNumber, numberInput]
    setLotteryNumber(updatedNumber)
    // }
  }

  useEffect(() => {
    if (lotteryNumber.length === 6) {
      setMaxNumber(true)
    } else {
      setMaxNumber(false)
    }

    if (maxTickets) {
      setMaxNumber(true)
    }
  }, [lotteryNumber, maxTickets, setMaxNumber])

  return (
    <div className=''>
      <div className=''>
        <span>Select numbers Manually</span>
      </div>
      <div className='grid grid-flow-col'>
        {numberArray10.map((number) => (
          <div
            key={`number_${number}`}
            onClick={() => selectNumberHandler(number)}
            className={''}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NumberBox
