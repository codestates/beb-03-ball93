import { atom } from 'recoil'
import { balanceType } from 'state/types'

export const balanceState = atom<balanceType>({
  key: `balanceState/${Math.random().toString(36).substring(2, 11)}`,
  default: {
    toriiBalance: null,
    cw20Balance: null,
  },
})

export const contractBalanceState = atom<string>({
  key: `contractBalanceState/${Math.random().toString(36).substring(2, 11)}`,
  default: 'TORII',
})

export const cosmWasmErrorState = atom<string>({
  key: `cosmWasmErrorState/${Math.random().toString(36).substring(2, 11)}`,
  default: '',
})
