import { atom } from 'recoil'
import { userTicketType } from 'types/userTypes'

export const userTicketsState = atom<userTicketType[]>({
  key: `userTicketsState/${Math.random().toString(36).substring(2, 11)}`,
  default: [],
})
