import { useState, useEffect, MouseEvent } from 'react'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { StdFee, Coin } from '@cosmjs/amino'
import { calculateFee, GasPrice } from '@cosmjs/stargate'
import WalletLoader from 'components/WalletLoader'
import { useSigningClient } from 'contexts/cosmwasm'
import {
  convertMicroDenomToDenom,
  convertFromMicroDenom,
  convertDenomToMicroDenom,
} from 'utils/conversion'
import { string } from 'yup'

const PUBLIC_CHAIN_NAME = process.env.NEXT_PUBLIC_CHAIN_NAME
const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'uconst'
// const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'utorii'
const PUBLIC_RECIPIENT_ADDRESS =
  process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS ||
  'archway1ff2we286me6z8kuhcwm9xlmpqjaqce9jg4rycl'
const PUBLIC_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  'archway15ttyr87wv3cp7svhmhm7ed8ge9xh4wfxcllrl9qjjt8wlj859dzsk57quv'

const Send: NextPage = () => {
  const { walletAddress, signingClient } = useSigningClient()
  const [balance, setBalance] = useState('')
  const [lotteryBalance, setLotteryBalance] = useState('')
  const [loadedAt, setLoadedAt] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [recipientAddress, setRecipientAddress] = useState(
    PUBLIC_RECIPIENT_ADDRESS
  )
  const [contractAddress, setContractAddress] = useState(
    PUBLIC_CONTRACT_ADDRESS
  )
  const [sendAmount, setSendAmount] = useState('0.1')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const { lotteryNumberData } = useSelector((state: RootState) => ({
    lotteryNumberData: Object.values(state.lottery.lotteryInput).map((el) =>
      el.number.join('')
    ),
  }))
  // console.log(lotteryNumberData)

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0) {
      return
    }
    setError('')
    setSuccess('')
    // Get MyWallet Balance (내지갑 잔액)
    signingClient
      .getBalance(walletAddress, PUBLIC_STAKING_DENOM)
      .then((response: any) => {
        const { amount, denom }: { amount: number; denom: string } = response
        setBalance(
          `${convertMicroDenomToDenom(amount)} ${convertFromMicroDenom(denom)}`
        )
        console.log('--------- Get MyWallet Balance ---------')
        console.log(balance)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // 여기서부터 TEST CASE 입니다!!
    // Get Contract Balance (컨트랙트 누적금액)
    signingClient
      .getBalance(contractAddress, PUBLIC_STAKING_DENOM)
      .then((response: any) => {
        const { amount, denom }: { amount: number; denom: string } = response
        setLotteryBalance(
          `${convertMicroDenomToDenom(amount)} ${convertFromMicroDenom(denom)}`
        )
        console.log('--------- Get Contract Balance ---------')
        console.log(lotteryBalance)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })

    // Test Query Message!!!!
    // combination ( 유저가 구매한 로또 번호들)
    const qeury_msg1: Record<string, unknown> = {
      combination: {
        lottery_id: 1,
        address: walletAddress,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg1)
      .then((response: any) => {
        console.log('--------- Combination ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // Balance (회차당 총상금)
    const qeury_msg2: Record<string, unknown> = {
      balance: {
        lottery_id: 1,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg2)
      .then((response: any) => {
        console.log('--------- Balance ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // Winner (해당 회차 당첨자)
    const qeury_msg3: Record<string, unknown> = {
      winner: {
        lottery_id: 1,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg3)
      .then((response: any) => {
        console.log('--------- Winner ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // Jackpot Balance (해당 회차 등수별 받아야할 액수)
    const qeury_msg4: Record<string, unknown> = {
      jackpot_balance: {
        lottery_id: 1,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg4)
      .then((response: any) => {
        console.log('--------- Jackpot Balance ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // Jackpot Count (해당회차 랭킹별 당첨자수)
    const qeury_msg5: Record<string, unknown> = {
      jackpot_count: {
        lottery_id: 1,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg5)
      .then((response: any) => {
        console.log('--------- Jackpot Count ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // Count Ticket (해당회차 누적 티켓수)
    const qeury_msg6: Record<string, unknown> = {
      count_ticket: {
        lottery_id: 1,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg6)
      .then((response: any) => {
        console.log('--------- Count Ticket ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
    // Count User (해당회차 참여자수)
    const qeury_msg7: Record<string, unknown> = {
      count_user: {
        lottery_id: 1,
      },
    }
    signingClient
      .queryContractSmart(contractAddress, qeury_msg7)
      .then((response: any) => {
        console.log('--------- Count User ---------')
        console.log(response)
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })

    // queryContractSmart(address: string, queryMsg: Record<string, unknown>): Promise<JsonObject>;
  }, [signingClient, walletAddress, loadedAt])

  const handleSend = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    const entrypoint = {
      register: {
        address: walletAddress,
        combination: lotteryNumberData,
      },
    }
    const setamount: string = (
      entrypoint.register.combination.length * 1000
    ).toString()
    const gasPrice = GasPrice.fromString('0.002uconst')
    const txFee = calculateFee(400000, gasPrice)

    const amount: Coin[] = [
      {
        denom: PUBLIC_STAKING_DENOM,
        amount: setamount,
      },
    ]
    // queryContractSmart(address: string, queryMsg: Record<string, unknown>): Promise<any>
    await signingClient
      ?.execute(walletAddress, contractAddress, entrypoint, txFee, '', amount)
      // execute(senderAddress: string, contractAddress: string, msg: Record<string, unknown>, memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult>;
      // ?.sendTokens(walletAddress, recipientAddress, amount)
      .then((resp) => {
        console.log('resp', resp)

        const message = `Success! Sent ${sendAmount}  ${convertFromMicroDenom(
          PUBLIC_STAKING_DENOM
        )} to ${recipientAddress}.`

        setLoadedAt(new Date())
        setLoading(false)
        setSendAmount('')
        setSuccess(message)
      })
      .catch((error) => {
        setLoading(false)
        setError(`Error! ${error.message}`)
        console.log('Error:', error)
        // console.log('Error: signingClinet.execute(): ', error)
      })
  }

  return (
    <WalletLoader loading={loading}>
      <button type='button' className='btn-payment mt-10' onClick={handleSend}>
        <img src={'/archway-logo.png'} width={32} className={'pr-2'} />
        Pay with Archway
      </button>
    </WalletLoader>
  )
}

export default Send
function funds(
  walletAddress: string,
  arg1: string,
  arg2: { register: { address: string; combination: string[] } },
  funds: any,
  amount2: Coin[]
) {
  throw new Error('Function not implemented.')
}
