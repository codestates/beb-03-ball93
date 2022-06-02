import { useState, MouseEvent } from 'react'
import { Coin } from '@cosmjs/amino'
import { calculateFee, GasPrice } from '@cosmjs/stargate'
import WalletLoader from 'components/WalletLoader'
import { useSigningClient } from 'contexts/cosmwasm'
import { convertFromMicroDenom } from 'utils/conversion'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { lotteryTicketState } from 'state/lottery'
import { userTicketsState } from 'state/user'

interface SendToriiProps {
  setSuccess: React.Dispatch<React.SetStateAction<string>>
  setError: React.Dispatch<React.SetStateAction<string>>
  seed: string
}

const SendSeed = ({ setSuccess, setError, seed }: SendToriiProps) => {
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

  const lotteryTicket = useRecoilValue(lotteryTicketState)
  const setUserTicket = useSetRecoilState(userTicketsState)

  const resetlotteryTicket = useResetRecoilState(lotteryTicketState)

  // const lotteryTicketsToSend = Object.values(lotteryTicket).map((el) =>
  //   el.number.join('')
  // )

  const handleSend = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setSuccess('')
    setError('')
    setLoading(true)
    const entrypoint = {
      seed_generation: {
        seed: seed,
      },
    }
    // claim true => 당첨금 지급
    // const entrypoint = {
    //   claim: {
    //     address: walletAddress,
    //     lottery_id: //,
    //   },
    // }
    const gasPrice = GasPrice.fromString('0.002utorii')
    const txFee = calculateFee(1300000, gasPrice)

    await signingClient
      ?.execute(walletAddress, PUBLIC_CONTRACT_ADDRESS, entrypoint, txFee)
      .then((res) => {
        console.log('res', res)

        const message = `Success! Sent ${
          entrypoint.seed_generation.seed
        }  ${convertFromMicroDenom(
          PUBLIC_STAKING_DENOM
        )} to ${PUBLIC_RECIPIENT_ADDRESS}.`

        setLoadedAt(new Date())
        setLoading(false)
        setSuccess(message)
        // setUserTickets(lotteryTicketsToSend)
        resetlotteryTicket()
      })
      .catch((error) => {
        setLoading(false)
        setError(`Error! ${error.message}`)
        console.log('Error: signingClient.execute(): ', error)
      })
  }

  return (
    <WalletLoader loading={loading}>
      {/* {lotteryTicket.number.length > 0 && ( */}
      <button
        type='button'
        className='btn-payment w-36 mx-auto relative z-30'
        onClick={handleSend}
      >
        <img src={'/archway-logo.png'} width={32} className={'pr-2'} />
        Seed
      </button>
      {/* )} */}
    </WalletLoader>
  )
}

export default SendSeed