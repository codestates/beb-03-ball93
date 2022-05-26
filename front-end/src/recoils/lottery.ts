import {
  updateLotteryTickets,
  updateLotteryHistory,
  lotteryRequestStart,
  lotteryRequestFinish,
  resetLotteryTickets,
} from 'recoils/lotterySlice'
import { userPopupAccount } from 'recoils/userSlice'
import lotteryType from 'types/lotteryTypes'
import { createAlert } from 'recoils/alert'

// import axios from 'axios'

export const addLotteryTicket =
  (lotteryTicket: lotteryType) => (dispatch: any, getState: any) => {
    const currentLotteryTickets: lotteryType[] = getState().lottery.lotteryInput

    // console.log('//////////')
    // console.log(currentLotteryTickets)
    // console.log(lotteryTicket)

    const updatedLotteryTickets = [...currentLotteryTickets, lotteryTicket]

    // console.log('******')
    // console.log(updatedLotteryTickets)

    dispatch(updateLotteryTickets(updatedLotteryTickets))
  }

export const removeLotteryTicket =
  (id: string) => (dispatch: any, getState: any) => {
    const currentLotteryTickets: lotteryType[] = getState().lottery.lotteryInput

    const updatedLotteryTickets: lotteryType[] = currentLotteryTickets.filter(
      (ticket) => ticket.id !== id
    )

    dispatch(updateLotteryTickets(updatedLotteryTickets))
  }

export const getLotteryHistory = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(lotteryRequestStart())

    const token = getState().user.token

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // const { data } = await axios.get('/api/lottery/history', config)

    // dispatch(updateLotteryHistory(data))
  } catch (error: any) {
    dispatch(lotteryRequestFinish())
    dispatch(createAlert(error.response.data.message))
  }
}

export const playLottery = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(lotteryRequestStart())

    const token = getState().user.token
    const user = getState().user.userInfo
    const { lotteryInput } = getState().lottery
    const body = {
      playLottery: lotteryInput,
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // const { data } = await axios.post('/api/lottery/play', body, config)

    // const updateBankAccount = data.account

    // dispatch(userPopupAccount(updateBankAccount))

    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        // account: updateBankAccount,
        account: '3wqdj1231j1jla',
        avatar: user.avatar ? user.avatar : '',
      })
    )
    dispatch(resetLotteryTickets())
    dispatch(lotteryRequestFinish())
    // return data.gameHistory[0]
  } catch (error: any) {
    dispatch(lotteryRequestFinish())
    dispatch(createAlert(error.response.data.message))
  }
}
