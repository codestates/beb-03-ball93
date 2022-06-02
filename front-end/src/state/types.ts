type severity = 'error' | 'success' | 'warning'

export interface alertType {
  message: string
  id: string
  alertType: severity
}

export interface lotteryTicketType {
  userId: string
  ticketId: number
  roundId: number
  number: string[]
  // pairNumber: number[]
  rank: []
  paid: boolean
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
  totalPrizes: number
  jackpotCount: []
  winners: []
}

export interface lotteryRoundContractType extends lotteryRoundType {
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
  userId: string
  walletAddress: string
}

export interface userTicketsType extends userType {
  tickets: lotteryTicketType[]
}
