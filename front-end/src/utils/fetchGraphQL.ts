const NEXT_PUBLIC_GRAPHQL_API_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://localhost:4000/graphql'

const fetchGraphQL = async (text: any) => {
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

export default fetchGraphQL

export const queryLotteryRounds = ``
export const mutationUser = `
  mutation{
    user{
      userId
      walletAddress
    }
  }
`
export const queryUserTickets = `
  query{
    user{
      userId
      walletAddress
    }
    lotteryTickets{
      ticketId{
        ticketId: number
        roundId: number
        number: number[]
        rank: []
        paid: boolean
      }
    }
  }
`
