type severity = 'error' | 'success' | 'warning'

export interface alertType {
  message: string
  id: string
  alertType: severity
}

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

export interface lotteryRoundType {
  roundId: number
  ticketCounts: string
  userCounts: string
  winningNumber: string
  prizesByRank: {
    first: string
    second: string
    third: string
    fourth: string
    fifth: string
  }
  jackpotCount: []
  winners: []
}

export interface lotteryRoundContractType extends lotteryRoundType {
  totalPrizes: number
  winnerCountsByRank: string[]
  contractConfig: {}
}

export interface lotteryDrawType {
  lotteryDrawDate: Date | null
}

export interface popupHistoryType {
  amount: number
  paidAt: string
  _id: string
}

export interface userType {
  id: string
  walletAddress: string
}

export interface userTicketType extends userType {
  number: number[]
  roundId: number
  ticketCounts: string
}
