import { atom } from 'recoil'

export const walletBalanceState = atom<string>({
  key: `walletBalanceState/${Math.random().toString(36).substring(2, 11)}`,
  default: 'TORII',
})

export const contractBalanceState = atom<string>({
  key: `contractBalanceState/${Math.random().toString(36).substring(2, 11)}`,
  default: 'TORII',
})

export const cosmWasmErrorState = atom<string>({
  key: `cosmWasmErrorState/${Math.random().toString(36).substring(2, 11)}`,
  default: '',
})
