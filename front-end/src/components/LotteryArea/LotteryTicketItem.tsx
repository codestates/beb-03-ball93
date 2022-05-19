import lotteryModel from 'models/lotteryModels'
import { RiDeleteBin2Line } from 'react-icons/ri'

import LotteryTicket from 'components/LotteryTicket/LotteryTicket'
interface LotteryTicketItemProps {
  ticket: lotteryModel
  removeTicketHandler: (id: string) => void
}

const LotteryTicketItem = ({
  ticket,
  removeTicketHandler,
}: LotteryTicketItemProps) => {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     fontWeight: 600,
    //     justifyContent: 'space-between',
    //     borderRadius: '0.5rem',
    //     ':nth-of-type(2n)': {
    //       backgroundColor: '#f7f9fc',
    //     },
    //   }}
    // >
    <>
      <LotteryTicket ticket={ticket} />
      <button onClick={() => removeTicketHandler(ticket.id)}>야</button>
      <RiDeleteBin2Line />
    </>
  )
}

export default LotteryTicketItem
