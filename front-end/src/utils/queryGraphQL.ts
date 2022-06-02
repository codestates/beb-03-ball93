const NEXT_PUBLIC_GRAPHQL_API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://localhost:4000/graphql'

const queryGraphQL = async (text: any) => {
  const response = await fetch(NEXT_PUBLIC_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: text,
    }),
  })
  return await response.json()
}

export default queryGraphQL

export const queryLotteryRounds = `
  query{
    rounds{
      lottery_id
      winner{
        addr
        rank
        ticket
        claim
      }
    get_jackpot{
      worker
      round
    }
    count_ticket
    count_user
    jackpot_balance{
      first
      second
      third
      fourth
      fifth
    }
    jackpot_count
    balance
    }
  }
`

export const mutationUser = `
  mutation{
    user{
      userId
      walletAddress
    }
  }
`
// export const queryUserTickets = `
//   query{
//     lotteryTicket(walletAddress:${walletAddress}){
//       userId
//       walletAddress
//       ticketId
//       roundId
//       number
//       rank {
//         first
//         second
//         third
//         fourth
//         fifth
//       }
//       paid
//     }
//   }
// `
export const createUserTicket = `
  mutation{
    createLotteryTicket(createTicket:{
      userId: "Gidong",
      walletAddress: "archway1wfft7j4tq22a0xu6hnteqj0pyldkqk7chhvlyz",
      ticketId: 1,
      roundId: 1,
      number: ["123456","123467","234567","345678"],
      rank: {
        first:"1",
        second:"2",
        third:"3",
        fourth:"4",
        fifth:"5"
      }
      paid: false
    }){
      _id
      userId
      walletAddress
      ticketId
      roundId
      number
      rank{
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
export const updateUserTicket = `
  mutation{
    updateLotteryTicket(updateTicket:{
      walletAddress:"archway1ff2we286me6z8kuhcwm9xlmpqjaqce9jg4rycl",
      ticketId: 2,
      roundId: 2,
    }){
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
