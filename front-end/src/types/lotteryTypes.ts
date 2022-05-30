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
  count_ticket: string
  count_user: string
  get_jackpot: []
  jackpot_balance: []
  jackpot_count: []
  winner: []
}

export interface lotteryDrawType {
  lotteryDrawDate: Date | null
}
