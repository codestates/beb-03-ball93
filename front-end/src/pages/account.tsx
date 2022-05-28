// import LotteryHistoryView from 'views/LotteryHistoryView'
import WalletLoader from 'components/WalletLoader'
import { useSigningClient } from 'contexts/cosmwasm'
import { useEffect, useState } from 'react'
import * as getContractData from 'utils/getContractData'

const Account = () => {
  const { walletAddress, signingClient } = useSigningClient()
  const [loadedAt, setLoadedAt] = useState(new Date())
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!signingClient || walletAddress.length === 0) {
      return
    }
    setError('')
    setSuccess('')
    getContractData.getContractBalance()
  }, [signingClient, walletAddress, loadedAt])

  return (
    <WalletLoader loading={loading}>
      <div>{/* <LotteryHistoryView /> */}</div>
    </WalletLoader>
  )
}
export default Account
