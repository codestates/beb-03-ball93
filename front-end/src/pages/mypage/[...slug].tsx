import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { lotteryRoundsState } from 'state/lottery'
import { userTicketsState } from 'state/user'

const ticketId = () => {
  const { query } = useRouter()

  const lotteryRounds = useRecoilValue(lotteryRoundsState)
  const userTickets = useRecoilValue(userTicketsState)

  console.log('---------ticketId----------')
  console.log(lotteryRounds)
  console.log(userTickets)

  // const ticketId = router.query.params || [];

  console.log(query)

  return (
    <div className='mt-5'>
      <em>{query['ticketId']}</em>
      {userTickets.tickets?.map((item: any, index: number) => (
        <div key={index} className='bg-primary m-5'>
          <div className='text-2xl text-white'>티켓id : {item.ticketId}</div>
          <div className='text-2xl text-white'>
            {JSON.stringify(item.number)}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ticketId
