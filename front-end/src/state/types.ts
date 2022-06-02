type severity = 'error' | 'success' | 'warning'

export interface alertType {
  message: string
  id: string
  alertType: severity
}

export interface lotteryTicketType {
  userId: string
  walletAddress: string
  ticketId: string
  roundId: number
  number: string[]
  // pairNumber: number[]
  rank: number[]
  paid: boolean
}

export interface lotteryGameType {
  playLottery?: lotteryTicketType[]
  resultLottery?: lotteryTicketType
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
  winnerCountsByRank: string[]
  winners: number[]
}

export interface lotteryRoundContractType extends lotteryRoundType {
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
