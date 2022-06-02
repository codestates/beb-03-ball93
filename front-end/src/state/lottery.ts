import { atom } from 'recoil'
import {
  lotteryTicketType,
  lotteryRoundType,
  lotteryRoundContractType,
  lotteryDrawType,
  userTicketsType,
} from 'state/types'

export const lotteryTicketState = atom<lotteryTicketType>({
  key: `lotteryTicketState/${Math.random().toString(36).substring(2, 11)}`,
  default: {
    userId: '',
    walletAddress: '',
    ticketId: '',
    roundId: 2,
    number: [],
    // pairNumber: number[]
    rank: [],
    paid: false,
  },
})

export const lotteryRoundState = atom<lotteryRoundType>({
  key: `lotteryRoundState/${Math.random().toString(36).substring(2, 11)}`,
  default: {
    roundId: 0,
    ticketCounts: '',
    userCounts: '',
    winningNumber: '',
    prizesByRank: {
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
    },
    totalPrizes: 0,
    jackpotCount: [],
    winners: [],
  },
})

export const lotteryRoundsState = atom<lotteryRoundType[]>({
  key: `lotteryRoundsState/${Math.random().toString(36).substring(2, 11)}`,
  default: [],
})
export const lotteryRoundsStateFromContract = atom<lotteryRoundContractType[]>({
  key: `lotteryRoundsStateFromContract/${Math.random()
    .toString(36)
    .substring(2, 11)}`,
  default: [],
})

export const lotteryDrawState = atom<lotteryDrawType>({
  key: `lotteryDrawState/${Math.random().toString(36).substring(2, 11)}`,
  default: { lotteryDrawDate: null },
})

// export const getLotteryHistory = () => async (dispatch: any, getState: any) => {
//   try {
//     dispatch(lotteryRequestStart())

//     const token = getState().user.token

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }

// const { data } = await axios.get('/api/lottery/history', config)

// dispatch(updateLotteryHistory(data))
// } catch (error: any) {
//   dispatch(lotteryRequestFinish())
//   dispatch(createAlert(error.response.data.message))
// }
// }

// export const playLottery = () => async (dispatch: any, getState: any) => {
//   try {
//     dispatch(lotteryRequestStart())

//     const token = getState().user.token
//     const user = getState().user.userInfo
//     const { lotteryInput } = getState().lottery
//     const body = {
//       playLottery: lotteryInput,
//     }
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     }

// const { data } = await axios.post('/api/lottery/play', body, config)

// const updateBankAccount = data.account

// dispatch(userPopupAccount(updateBankAccount))

//     localStorage.setItem(
//       'userInfo',
//       JSON.stringify({
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         // account: updateBankAccount,
//         account: '3wqdj1231j1jla',
//         avatar: user.avatar ? user.avatar : '',
//       })
//     )
//     dispatch(resetLotteryTickets())
//     dispatch(lotteryRequestFinish())
//     // return data.gameHistory[0]
//   } catch (error: any) {
//     dispatch(lotteryRequestFinish())
//     dispatch(createAlert(error.response.data.message))
//   }
// }
