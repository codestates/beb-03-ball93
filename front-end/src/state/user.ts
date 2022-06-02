import { atom } from 'recoil'
import { userTicketType } from 'state/types'

export const userTicketsState = atom<userTicketType[]>({
  key: `userTicketsState/${Math.random().toString(36).substring(2, 11)}`,
  default: [],
})
