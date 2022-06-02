import { useRecoilValue } from 'recoil'
import { lotteryRoundsState } from 'state/lottery'
import { userTicketsState } from 'state/user'
import { useRouter } from 'next/router'
import Link from 'next/link'
import WalletLoader from 'components/WalletLoader'

const MyPage = () => {
  const lotteryRounds = useRecoilValue(lotteryRoundsState)
  const userTickets = useRecoilValue(userTicketsState)
  const { query } = useRouter()
  console.log(query)

  const findWinningNumber = (roundId: number) => {
    let index = lotteryRounds.findIndex((el) => el.roundId === roundId)
    return lotteryRounds[index].winningNumber
  }

  console.log(userTickets.tickets)
  // console.log(lotteryRounds)

  return (
    <WalletLoader>
      <div className='mt-10'>
        <h1 className='text-2xl'>구매한 티켓</h1>
        {userTickets.tickets?.map((item: any, index: number) => (
          <div
            key={index}
            className='flex flex-row justify-between items-center text-2xl text-white bg-primary relative z-40 m-6 '
          >
            <div className='flex flex-col justify-center items-center  '>
              <div className='text-2xl '>티켓id : {item.ticketId}</div>
              <div className='text-2xl '>
                회차 : {JSON.stringify(item.roundId)}
              </div>
              <div className='text-2xl '>
                당첨번호 : {findWinningNumber(item.roundId)}
              </div>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <p>
                '1등은 아쉽게 되지 않았습니다.'
                {/* {item?.rank[0].first !== '0'
                  ? '1등 당첨'
                  : '1등은 아쉽게 되지 않았습니다.'} */}
              </p>
              <p>
                '2등은 아쉽게 되지 않았습니다.'
                {/* {item?.rank[0].second !== '0'
                  ? '2등 당첨'
                  : '2등은 아쉽게 되지 않았습니다.'} */}
              </p>
              <p>
                '3등은 아쉽게 되지 않았습니다.'
                {/* {item?.rank[0].thrid !== '0'
                  ? '3등 당첨'
                  : '3등은 아쉽게 되지 않았습니다.'} */}
              </p>
              <p>
                '4등은 아쉽게 되지 않았습니다.'
                {/* {item?.rank[0].fourth !== '0'
                  ? '4등 당첨'
                  : '4등은 아쉽게 되지 않았습니다.'} */}
              </p>
              <p>
                {/* {item?.rank[0].fifth !== '0'
                  ? '5등 당첨'
                  : '5등은 아쉽게 되지 않았습니다.'} */}
                {index === 0 ? '5등 당첨' : '5등은 아쉽게 되지 않았습니다.'}
              </p>
            </div>
            <div className=''>
              <Link href={`/mypage/${item.ticketId}`}>
                <a>
                  <button className='btn btn-secondary'>자세히 보기</button>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </WalletLoader>
  )
}
export default MyPage
