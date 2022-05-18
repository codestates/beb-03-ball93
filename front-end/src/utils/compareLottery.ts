import lotteryModel from 'models/lotteryModels'

const compareLotteryTicket = (arr1: number[], arr2: number[]) => {
  return arr1.filter((item) => arr2.includes(item))
}

const matchNumberLottery = (
  playerLottery: lotteryModel,
  resultLottery: lotteryModel
) => {
  const { number: numberSelectedbyUser, pairNumber: pairNumberSelectedbyUser } =
    playerLottery
  const { number: numberSelectedResult, pairNumber: pairNumberSelectedResult } =
    resultLottery

  const matchNumber = compareLotteryTicket(
    numberSelectedbyUser,
    numberSelectedResult
  )
  const matchPairNumber = compareLotteryTicket(
    pairNumberSelectedbyUser,
    pairNumberSelectedResult
  )

  return { matchNumber, matchPairNumber }
}

export default matchNumberLottery
