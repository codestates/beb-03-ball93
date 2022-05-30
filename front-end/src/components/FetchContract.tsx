import { useSigningClient } from 'contexts/cosmwasm'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  convertMicroDenomToDenom,
  convertFromMicroDenom,
} from 'utils/conversion'
import { lotteryRoundState, lotteryTicketsState } from 'recoils/lottery'
import {
  signingClientState,
  contractBalanceState,
  cosmWasmErrorState,
  walletBalanceState,
} from 'recoils/cosmWasm'
import { useEffect, useState } from 'react'
import WalletLoader from './WalletLoader'

const FetchContract = () => {
  const { walletAddress, signingClient } = useSigningClient()
  // const { walletAddress, signingClient } = useRecoilValue(
  //   signingClientState
  // )

  const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'utorii'
  const PUBLIC_CONTRACT_ADDRESS =
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
    'archway1ngcd86tzyxws4yacw3nahrgmn07c6rzrc2jmdehgy65np9wcv35shffh5f'

  const [loadedAt, setLoadedAt] = useState(new Date())

  const lotteryTickets = useRecoilValue(lotteryTicketsState)
  const lotteryRound = useRecoilValue(lotteryRoundState)
  const [balance, setBalance] = useRecoilState(walletBalanceState)
  const [contractBalance, setContractBalance] =
    useRecoilState(contractBalanceState)
  const [error, setError] = useRecoilState(cosmWasmErrorState)

  useEffect(() => {
    const getWalletBalance = async () => {
      await signingClient
        ?.getBalance(walletAddress, PUBLIC_STAKING_DENOM)
        .then((response: any) => {
          const { amount, denom }: { amount: number; denom: string } = response
          setBalance(
            `${convertMicroDenomToDenom(amount)} ${convertFromMicroDenom(
              denom
            )}`
          )
          console.log('--------- Get Wallet Balance ---------')
          console.log(balance)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getWalletBalance(): ', error)
        })
    }
    const getContractBalance = async () => {
      await signingClient
        ?.getBalance(PUBLIC_CONTRACT_ADDRESS, PUBLIC_STAKING_DENOM)
        .then((response: any) => {
          const { amount, denom }: { amount: number; denom: string } = response
          setContractBalance(
            `${convertMicroDenomToDenom(amount)} ${convertFromMicroDenom(
              denom
            )}`
          )
          console.log('--------- Get Contract Balance ---------')
          console.log(contractBalance)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getContractBalance(): ', error)
        })
    }
    const getUserLotteryNumbers = async () => {
      const queryMsg: Record<string, unknown> = {
        combination: {
          lottery_id: lotteryRound.id,
          address: walletAddress,
        },
      }
      await signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get User Lottery Numbers ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getUserLotteryNumbers(): ', error)
        })
    }
    const getWinningNumbers = () => {
      const queryMsg: Record<string, unknown> = {
        get_jackpot: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('-------- Get Winning Numbers---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getWinningNumbers(): ', error)
        })
    }
    const getRoundWinners = () => {
      const queryMsg: Record<string, unknown> = {
        winner: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get Round Winners ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getRoundWinners(): ', error)
        })
    }
    const getTotalPrizes = () => {
      const queryMsg: Record<string, unknown> = {
        balance: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Total Prizes ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getTotalPrizes(): ', error)
        })
    }
    const getPrizesByRank = () => {
      const queryMsg: Record<string, unknown> = {
        jackpot_balance: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get Prizes By Rank ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getPrizesByRank(): ', error)
        })
    }
    const getTicketCounts = () => {
      const queryMsg: Record<string, unknown> = {
        count_ticket: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get Ticket Counts ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getTicketCounts(): ', error)
        })
    }
    const getUserCounts = () => {
      const queryMsg: Record<string, unknown> = {
        count_user: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get User Counts ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getUserCounts(): ', error)
        })
    }
    const getWinnerCountsByRank = () => {
      const queryMsg: Record<string, unknown> = {
        jackpot_count: {
          lottery_id: lotteryRound.id,
        },
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get Winner Counts By Rank ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getWinnerCountsByRank(): ', error)
        })
    }
    const getContractConfig = () => {
      const queryMsg: Record<string, unknown> = {
        config: {},
      }
      signingClient
        ?.queryContractSmart(PUBLIC_CONTRACT_ADDRESS, queryMsg)
        .then((response: any) => {
          console.log('--------- Get Contract Config ---------')
          console.log(response)
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error getContractConfig(): ', error)
        })
    }
    getWalletBalance()
    getContractBalance()
    getUserLotteryNumbers()
    getWinningNumbers()
    getRoundWinners()
    getTotalPrizes()
    getPrizesByRank()
    getTicketCounts()
    getUserCounts()
    getWinnerCountsByRank()
    getContractConfig()
  }, [walletAddress, signingClient, loadedAt])

  return <div></div>
}
export default FetchContract
