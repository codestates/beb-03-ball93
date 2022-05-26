import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from 'recoils/store'
import { playLottery } from 'recoils/lottery'
import lotteryGameType from 'types/lotteryGameTypes'
import LotteryDetails from 'components/LotteryHistory/LotteryDetails'
import LotterySelect from 'components/NumberBox/LotterySelect'
import Banner from 'components/Layout/Banner'
import Timer from 'components/CountdownTimer/Timer'

const lottery = () => {
  // const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [gameResult, setGameResult] = useState<lotteryGameType | null>(null)

  // const screenWidth = window.innerWidth
  // console.log(screenWidth)

  const handleClose = () => {
    setOpen(false)
  }

  // const { isLogin } = useSelector((state: RootState) => state.user)
  // const { loading } = useSelector((state: RootState) => state.lottery)

  const payHandler = async () => {
    //   if (!isLogin) {
    //     // navigate('/signin')
    //     return
    //   }
    //   const resultGame: any = await dispatch(playLottery())
    //   if (resultGame) {
    //     setGameResult(resultGame)
    //     setOpen(true)
    //   }
    //   if (!resultGame) {
    //     setGameResult(null)
    //     return
    //   }
  }

  return (
    <div className='flex flex-col'>
      <div className='flex-col justify-center items-center rounded-md pt-4 w-full'>
        <Banner />
        <Timer />
      </div>
      <h1 className='text-3xl md:text-5xl bg-clip-text text-transparent font-semibold leading-tight bg-gradient-to-r from-teal-400 to-blue-500 my-2 mb-6'>
        Guess you're in luck today. <br />
        Just pick it!
      </h1>
      <LotterySelect payHandler={payHandler} />
      {/* {loading} */}
      {/* {!loading && gameResult && <LotteryDetails lotteryGame={gameResult!} />} */}
      {gameResult && <LotteryDetails lotteryGame={gameResult!} />}

      {gameResult && <LotteryDetails lotteryGame={gameResult!} />}

      {/* <button onClick={handleClose}>close icon</button> */}
    </div>
  )
}

export default lottery
