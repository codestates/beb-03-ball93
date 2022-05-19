import React, { useEffect } from 'react'

import classes from './PairNumberbox.module.css'

const numberArray10 = Array.from({ length: 10 }, (_, i) => i + 1)

interface PairNumberBoxProps {
  pairNumber: number[]
  setPairNumber: React.Dispatch<React.SetStateAction<number[]>>
  maxPairNumber: boolean
  setMaxPairNumber: React.Dispatch<React.SetStateAction<boolean>>
  maxTickets: boolean
}

const PairNumberBox = ({
  pairNumber,
  setPairNumber,
  maxPairNumber,
  setMaxPairNumber,
  maxTickets,
}: PairNumberBoxProps) => {
  const selectPairNumberHandler = (numberInput: number) => {
    const currentNumber = [...pairNumber]
    const exitedNumberIndex = currentNumber.findIndex(
      (number) => number === numberInput
    )
    const exitedNumber = currentNumber[exitedNumberIndex]
    let updatedNumber: number[]
    if (exitedNumber) {
      currentNumber.splice(exitedNumberIndex, 1)
      updatedNumber = [...currentNumber]
      setPairNumber(updatedNumber)
    } else {
      updatedNumber = [...currentNumber, numberInput]
      setPairNumber(updatedNumber)
    }
  }

  const numberClasses = (number: number) =>
    `${classes.number} ${
      pairNumber.find((n1) => n1 === number) ? classes.active : ''
    } ${maxPairNumber ? classes.disable : ''}`

  useEffect(() => {
    if (pairNumber.length === 1) {
      setMaxPairNumber(true)
    } else {
      setMaxPairNumber(false)
    }
    if (maxTickets) {
      setMaxPairNumber(true)
    }
  }, [pairNumber, maxTickets, setMaxPairNumber])

  return (
    <div className={classes.numberBox}>
      <div className={classes.label}>
        <span>Select Pair Numbers</span>
      </div>
      <div className={classes.numberGird}>
        {numberArray10.map((number) => (
          <div
            onClick={() => selectPairNumberHandler(number)}
            key={`pairNumber_${number}`}
            className={numberClasses(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PairNumberBox
