import { useState, MouseEvent } from 'react'
import { calculateFee, GasPrice } from '@cosmjs/stargate'
import { Coin } from '@cosmjs/amino'
import WalletLoader from 'components/WalletLoader'
import { useSigningClient } from 'contexts/cosmwasm'
import { convertFromMicroDenom } from 'utils/conversion'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { lotteryTicketState } from 'state/lottery'
import { userTicketsState } from 'state/user'
import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'

const style = {
  wrapper: `flex flex-col items-center justify-center mt-14`,
  content: `bg-primary w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-gray-100 my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-primary hover:bg-[#2b9d97] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const swap = () => {
  const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'utorii'
  const PUBLIC_CONTRACT_ADDRESS =
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
    'archway1ngcd86tzyxws4yacw3nahrgmn07c6rzrc2jmdehgy65np9wcv35shffh5f'
  const PUBLIC_RECIPIENT_ADDRESS =
    process.env.NEXT_PUBLIC_RECIPIENT_ADDRESS ||
    'archway158q2d9kj7dx0waap4fjk0u27hda3tztapyc7fp'
  const CW20_CONTRACT_ADDRESS =
    process.env.NEXT_PUBLIC_CW20_CONTRACT_ADDRESS ||
    'archway13whq5vk3fe8tp8anf903eezartyx70jf7pgqw7e043sleukl3lzq02r6ng'
  const { walletAddress, signingClient } = useSigningClient()
  const [loadedAt, setLoadedAt] = useState(new Date())
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState()

  const lotteryTicket = useRecoilValue(lotteryTicketState)
  const setUserTicket = useSetRecoilState(userTicketsState)

  const resetlotteryTicket = useResetRecoilState(lotteryTicketState)

  // const lotteryTicketsToSend = Object.values(lotteryTicket).map((el) =>
  //   el.number.join('')
  // )
  // const { formData, handleChange, sendTransaction } =
  // useContext(TransactionContext)

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const handleSend = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    // setSuccess('')
    // setError('')
    setLoading(true)
    const entrypoint = {
      // doto
      swap_for_doto: {
        amount: '100000',
      },
    }
    // torii
    const amount: Coin[] = [
      {
        denom: PUBLIC_STAKING_DENOM,
        amount: '50000',
      },
    ]

    const gasPrice = GasPrice.fromString('0.002utorii')
    const txFee = calculateFee(1300000, gasPrice)

    await signingClient
      ?.execute(
        walletAddress,
        CW20_CONTRACT_ADDRESS,
        entrypoint,
        txFee,
        '',
        amount
      )
      .then((res) => {
        console.log('res', res)

        const message = `Success! Sent ${
          entrypoint.swap_for_doto.amount
        }  ${convertFromMicroDenom(
          PUBLIC_STAKING_DENOM
        )} to ${PUBLIC_RECIPIENT_ADDRESS}.`

        setLoadedAt(new Date())
        setLoading(false)
        // setSuccess(message)
      })
      .catch((error) => {
        setLoading(false)
        // setError(`Error! ${error.message}`)
        console.log('Error: signingClient.execute(): ', error)
      })
  }

  return (
    <div className={style.wrapper}>
      <WalletLoader loading={loading}>
        <div className={style.content}>
          <div className={style.formHeader}>
            <div>Swap Torii to DoTo</div>
            <div>
              <RiSettings3Fill />
            </div>
          </div>
          <div className={style.transferPropContainer}>
            <input
              type='text'
              className={style.transferPropInput}
              placeholder='0.0'
              pattern='^[0-9]*[.,]?[0-9]*$'
              onChange={(e) => handleChange(e, 'amount')}
            />
            <div className={style.currencySelector}>
              <div className={style.currencySelectorContent}>
                <div className={style.currencySelectorIcon}>
                  {/* <Image src={icon.png} alt='eth logo' height={20} width={20} /> */}
                </div>
                <div className={style.currencySelectorTicker}>Torii</div>

                <AiOutlineDown className={style.currencySelectorArrow} />
              </div>
            </div>
          </div>
          <div className={style.transferPropContainer}>
            <input
              type='text'
              className={style.transferPropInput}
              placeholder='0x...'
              onChange={(e) => handleChange(e, 'addressTo')}
            />
            <div className={style.currencySelector}></div>
          </div>
          <div onClick={handleSend} className={style.confirmButton}>
            Confirm
          </div>
        </div>
      </WalletLoader>
    </div>
  )
}

export default swap
