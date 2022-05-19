import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store/store'
// import {
//   DialogContent,
//   Modal,
//   Button,
//   CircularProgress,
//   Typography,
//   Dialog,
// } from '@mui/material'
// import { Box } from '@mui/system'
// import CloseIcon from '@mui/icons-material/Close'
import { playLottery } from 'actions/lotteryAction'
import lotteryGameModel from 'models/lotteryGameModels'
import LotteryDetails from 'components/LotteryHistory/LotteryDetails'
import LotterySelect from 'components/NumberBox/LotterySelect'
import Timer from 'components/CountdownTimer/Timer'

const lottery = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [gameResult, setGameResult] = useState<lotteryGameModel | null>(null)

  // const screenWidth = window.innerWidth
  // console.log(screenWidth)

  const handleClose = () => {
    setOpen(false)
  }

  const { isLogin } = useSelector((state: RootState) => state.user)
  const { loading } = useSelector((state: RootState) => state.lottery)

  const payHandler = async () => {
    if (!isLogin) {
      // navigate('/signin')
      return
    }

    const resultGame: any = await dispatch(playLottery())

    if (resultGame) {
      setGameResult(resultGame)
      setOpen(true)
    }
    if (!resultGame) {
      setGameResult(null)
      return
    }
  }

  return (
    <div className='flex flex-col'>
      <Timer />
      <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 pt-5'>
        Guess you're in luck today! Just pick it!
      </h1>
      <LotterySelect payHandler={payHandler} />
      {loading && 'aa'}
      {!loading && gameResult && <LotteryDetails lotteryGame={gameResult!} />}

      {gameResult && <LotteryDetails lotteryGame={gameResult!} />}

      <button onClick={handleClose}>close icon</button>
    </div>
  )
}

export default lottery
