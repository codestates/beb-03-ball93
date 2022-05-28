import { useState, MouseEvent } from 'react'
import { Coin } from '@cosmjs/amino'
import { calculateFee, GasPrice } from '@cosmjs/stargate'
import WalletLoader from 'components/WalletLoader'
import { useSigningClient } from 'contexts/cosmwasm'
import { convertFromMicroDenom } from 'utils/conversion'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { lotteryTicketsState } from 'recoils/lottery'

interface SendToriiProps {
  setSuccess: React.Dispatch<React.SetStateAction<string>>
  setError: React.Dispatch<React.SetStateAction<string>>
}

const SendTorii = ({ setSuccess, setError }: SendToriiProps) => {
  // const PUBLIC_CHAIN_NAME = process.env.NEXT_PUBLIC_CHAIN_NAME
  // const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'uconst'
  const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'utorii'
  const PUBLIC_CONTRACT_ADDRESS =
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
    'archway1ngcd86tzyxws4yacw3nahrgmn07c6rzrc2jmdehgy65np9wcv35shffh5f'
  const PUBLIC_RECIPIENT_ADDRESS =
    process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS ||
    'archway158q2d9kj7dx0waap4fjk0u27hda3tztapyc7fp'
  const { walletAddress, signingClient } = useSigningClient()
  const [loadedAt, setLoadedAt] = useState(new Date())
  const [loading, setLoading] = useState(false)

  const lotteryTickets = useRecoilValue(lotteryTicketsState)
  const resetlotteryTickets = useResetRecoilState(lotteryTicketsState)

  const lotteryTicketsToSend = Object.values(lotteryTickets).map((el) =>
    el.number.join('')
  )

  const handleSend = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setSuccess('')
    setError('')
    setLoading(true)
    const entrypoint = {
      register: {
        address: walletAddress,
        combination: lotteryTicketsToSend,
      },
    }
    const sendAmount: string = (
      entrypoint.register.combination.length * 1000
    ).toString()
    const gasPrice = GasPrice.fromString('0.002utorii')
    const txFee = calculateFee(400000, gasPrice)

    const amount: Coin[] = [
      {
        denom: PUBLIC_STAKING_DENOM,
        amount: sendAmount,
      },
    ]
    await signingClient
      ?.execute(
        walletAddress,
        PUBLIC_CONTRACT_ADDRESS,
        entrypoint,
        txFee,
        '',
        amount
      )
      .then((res) => {
        console.log('res', res)

        const message = `Success! Sent ${sendAmount}  ${convertFromMicroDenom(
          PUBLIC_STAKING_DENOM
        )} to ${PUBLIC_RECIPIENT_ADDRESS}.`

        setLoadedAt(new Date())
        setLoading(false)
        setSuccess(message)
        resetlotteryTickets()
      })
      .catch((error) => {
        setLoading(false)
        setError(`Error! ${error.message}`)
        console.log('Error: signingClient.execute(): ', error)
      })
  }

  return (
    <WalletLoader loading={loading}>
      {lotteryTickets.length > 0 && (
        <button
          type='button'
          className='btn-payment w-60 mx-auto relative z-30'
          onClick={handleSend}
        >
          <img src={'/archway-logo.png'} width={32} className={'pr-2'} />
          Pay with Archway
        </button>
      )}
    </WalletLoader>
  )
}

export default SendTorii
