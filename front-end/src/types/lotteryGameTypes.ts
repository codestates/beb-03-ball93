import lotteryType from 'types/lotteryTypes'

interface lotteryGameType {
  playLottery: lotteryType[]
  resultLottery: lotteryType
  win: number
  lotteryCost: number
  createdAt: Date
}

export default lotteryGameType
