import lotteryModel from 'models/lotteryModels'

interface LotteryTicketProps {
  ticket: lotteryModel
}

const LotteryTicket = ({ ticket }: LotteryTicketProps) => {
  return (
    <div className='flex bg-[#f7f9fc]'>
      {ticket.number.map((number) => (
        <div>{number}</div>
      ))}
    </div>
  )
}

export default LotteryTicket
