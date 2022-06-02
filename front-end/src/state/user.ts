import { atom } from 'recoil'
import { userTicketsType, userType } from 'state/types'

export const userState = atom<userType>({
  key: `userTicketsState/${Math.random().toString(36).substring(2, 11)}`,
  default: {
    userId: '',
    walletAddress: '',
  },
})

export const userTicketsState = atom<userTicketsType>({
  key: `userTicketsState/${Math.random().toString(36).substring(2, 11)}`,
  default: {
    userId: '',
    walletAddress: '',
    tickets: [],
  },
})
