import { useSigningClient } from 'contexts/cosmwasm'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from 'components/ThemeToggle'
import { useRouter } from 'next/router'
import { navigation } from 'components/Layout/navigation'
import clsx from 'clsx'

const Header = () => {
  const { pathname } = useRouter()

  const { walletAddress, connectWallet, disconnect } = useSigningClient()
  const handleConnect = () => {
    if (walletAddress.length === 0) {
      connectWallet()
    } else {
      disconnect()
    }
  }

  const PUBLIC_SITE_ICON_URL = process.env.NEXT_PUBLIC_SITE_ICON_URL || ''

  return (
    <div className='flex justify-center items-center w-screen relative border-inherit rounded-b-3xl bg-white shadow-xl shadow-gray-200/30 py-5 '>
      <nav className='flex justify-between items-center max-w-screen-2xl w-full h-[58px] '>
        <div className='flex items-center transition duration-300 ease-in-out hover:scale-105 cursor-pointer'>
          <Link href='/lottery'>
            {PUBLIC_SITE_ICON_URL.length > 0 ? (
              <Image
                src={PUBLIC_SITE_ICON_URL}
                height={45}
                width={290}
                alt='Logo'
              />
            ) : (
              <span className='text-2xl'>DecentralLotto</span>
            )}
          </Link>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-slate-200 lg:flex lg:items-center'>
          <ul className='btn btn-primary content-center rounded-2xl px-3 py-2 space-x-3'>
            {navigation.pages.map((page, idx) => (
              <li key={idx}>
                <Link href={page.href}>
                  <a
                    className={clsx(
                      'rounded-lg px-3 py-2.5 duration-100 ease-in-out leading-6 hover:brightness-90 focus:outline-none dark:hover:brightness-125',
                      page.href === '/' + pathname.split('/')[1] &&
                        'bg-[#ffffffe7] text-[#66C1BD]'
                    )}
                  >
                    {page.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <ThemeToggle /> */}
        <div className='flex'>
          <button
            className='btn btn-primary hover:-translate-y-0.5'
            onClick={handleConnect}
          >
            {walletAddress || 'Connect Wallet'}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
