export interface lotteryType {
  number: number[]
  // pairNumber: number[]
  id: string
}

export interface lotteryGameType {
  playLottery?: lotteryType[]
  resultLottery?: lotteryType
  win?: number
  lotteryCost?: number
  createdAt?: Date
}

export interface lotteryRoundType extends lotteryGameType {
  id: number
}
