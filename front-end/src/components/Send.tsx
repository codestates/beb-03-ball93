import { useState, useEffect, MouseEvent } from 'react'
import type { NextPage } from 'next'
import { StdFee, Coin } from '@cosmjs/amino'

import WalletLoader from 'components/WalletLoader'
import { useSigningClient } from 'contexts/cosmwasm'
import {
  convertMicroDenomToDenom,
  convertFromMicroDenom,
  convertDenomToMicroDenom,
} from 'utils/conversion'

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

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0) {
      return
    }
    setError('')
    setSuccess('')

    signingClient
      .getBalance(walletAddress, PUBLIC_STAKING_DENOM)
      .then((response: any) => {
        const { amount, denom }: { amount: number; denom: string } = response
        setBalance(
          `${convertMicroDenomToDenom(amount)} ${convertFromMicroDenom(denom)}`
        )
      })
      .catch((error) => {
        setError(`Error! ${error.message}`)
        console.log('Error signingClient.getBalance(): ', error)
      })
  }, [signingClient, walletAddress, loadedAt])

  const handleSend = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    const amount: Coin[] = [
      {
        amount: convertDenomToMicroDenom(sendAmount),
        denom: PUBLIC_STAKING_DENOM,
      },
    ]
    const amount2: Coin[] = [
      {
        amount: '1000000',
        denom: PUBLIC_STAKING_DENOM,
      },
    ]
    // queryContractSmart(address: string, queryMsg: Record<string, unknown>): Promise<any>
    signingClient
      ?.queryContractSmart(contractAddress, {
        config: {},
      })
      // ?.execute(
      //   walletAddress,
      //   contractAddress,
      //   {
      //     register: {
      //       address: walletAddress,
      //       combination: ['123456'],
      //     },
      //   },
      //   '동규님 안녕하세요',
      //   amount2
      // )
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
        console.log('Error네용ㅠㅠ ', error)
        // console.log('Error: signingClinet.execute(): ', error)
      })
  }

  return (
    <WalletLoader loading={loading}>
      {/* <p className='text-xl font-normal tracking-normal'>
        Your wallet has {balance}
      </p>

      <div className='text-xl font-normal my-8 tracking-normal'>
        Buy a lottery ticket with {PUBLIC_CHAIN_NAME}
      </div>
      <div className='flex w-full max-w-xl'>
        <input
          type='text'
          id='recipient-address'
          className='input input-bordered focus:input-primary input-lg rounded-full flex-grow font-mono text-center text-lg'
          placeholder={`${PUBLIC_CHAIN_NAME} torii 받을 주소`}
          onChange={(event) => setRecipientAddress(event.target.value)}
          value={recipientAddress}
        />
      </div>
      <div className='flex flex-col md:flex-row mt-4 text-2xl w-full max-w-xl justify-between'>
        <div className='relative rounded-full shadow-sm md:mr-2'>
          <input
            type='number'
            id='send-amount'
            className='input input-bordered focus:input-primary input-lg w-full pr-24 rounded-full text-center font-mono text-lg '
            placeholder='Amount...'
            step='0.1'
            onChange={(event) => setSendAmount(event.target.value)}
            value={sendAmount}
          />
          <span className='absolute top-0 right-0 bottom-0 px-4 py-5 rounded-r-full bg-secondary text-base-100 text-sm'>
            {convertFromMicroDenom(PUBLIC_STAKING_DENOM)}
          </span>
        </div> */}
      <button
        className='mt-4 md:mt-0 btn btn-primary font-semibold hover:text-base-100 text-md rounded-lg flex-grow'
        onClick={handleSend}
      >
        Buy LotteryTicket now with TORII
      </button>
      {/* </div>
      <div className='mt-4 flex flex-col w-full max-w-xl'>
        {success.length > 0 && (
          <div className='alert alert-success'>
            <div className='flex-1 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='flex-shrink-0 w-6 h-6 mx-2 stroke-current flex-shrink-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                ></path>
              </svg>
              <label className='flex-grow break-all'>{success}</label>
            </div>
          </div>
        )}
        {error.length > 0 && (
          <div className='alert alert-error'>
            <div className='flex-1 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-6 h-6 mx-2 stroke-current flex-shrink-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                ></path>
              </svg>
              <label className='flex-grow break-all'>{error}</label>
            </div>
          </div>
        )}
      </div> */}
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
