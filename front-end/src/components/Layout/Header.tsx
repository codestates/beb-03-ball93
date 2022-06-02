import { useSigningClient } from 'contexts/cosmwasm'
import Link from 'next/link'
import ThemeToggle from 'components/ThemeToggle'
import Tab from 'components/Layout/Tab'
import { useEffect, useState } from 'react'
import queryGraphQL from 'utils/queryGraphQL'
import Loader from 'components/Loader'
import { useRecoilState } from 'recoil'
import { lotteryTicketState } from 'state/lottery'
import { userState } from 'state/user'
import generateUUID from 'utils/generateUUID'

const Header = () => {
  const { walletAddress, signingClient, connectWallet, disconnect } =
    useSigningClient()
  const PUBLIC_SITE_LOGO_URL = process.env.NEXT_PUBLIC_SITE_LOGO_URL || ''
  const PUBLIC_SITE_ICON_URL = process.env.NEXT_PUBLIC_SITE_ICON_URL || ''
  const [user, setUser] = useRecoilState(userState)
  const [lotteryTickets, setLotteryTickets] = useRecoilState(lotteryTicketState)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (walletAddress) {
      setLoading(true)
      setUser({ userId: generateUUID(), walletAddress: walletAddress })
      const queryUserTickets = `
      query{
        userTickets(walletAddress:"${walletAddress}"){
          userId
          walletAddress
          ticketId
          roundId
          number
          rank {
            first
            second
            third
            fourth
            fifth
          }
          paid
        }
      }
    `
      const query = queryUserTickets
      queryGraphQL(query).then((data) => {
        setLotteryTickets(data.data.userTickets)
        setLoading(false)
      })
      console.log(lotteryTickets)
    }
  }, [walletAddress])

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Loader />
      </div>
    )
  }
  const handleConnect = () => {
    if (walletAddress.length === 0) {
      connectWallet()
    } else {
      disconnect()
    }
  }

  return (
    <div className='fixed top-0 z-50 flex justify-center items-center w-screen border-inherit rounded-b-3xl bg-white shadow-xl shadow-gray-200/30 py-4'>
      <nav className='flex justify-between items-center max-w-screen-2xl w-full relative h-[58px]'>
        <div className='flex items-center transition duration-300 ease-in-out hover:scale-105 cursor-pointer'>
          <Link href='/lottery'>
            {PUBLIC_SITE_LOGO_URL.length > 0 ? (
              <div>
                <img
                  className='hidden lg:flex lg:w-64'
                  src={PUBLIC_SITE_LOGO_URL}
                />
                <img className='lg:hidden w-14' src={PUBLIC_SITE_ICON_URL} />
              </div>
            ) : (
              <span className='text-2xl'>DecentralLotto</span>
            )}
          </Link>
        </div>

        {/* <ThemeToggle /> */}
        <div className='hidden lg:flex'>
          <Tab />
        </div>
        <div className='lg:w-1/6 flex mr-6'>
          <button
            className='btn btn-primary hover:-translate-y-0.5'
            onClick={handleConnect}
          >
            {walletAddress
              ? `Hello ${walletAddress.slice(7, 16)}`
              : `Connect Wallet`}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
