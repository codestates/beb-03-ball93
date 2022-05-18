import { v4 as uuidv4 } from 'uuid'

const generateLottery = () => {
  let selectedNumber = []
  while (selectedNumber.length < 6) {
    let r = Math.floor(Math.random() * 50) + 1
    if (selectedNumber.indexOf(r) === -1) {
      selectedNumber.push(r)
    }
  }

  let selectedPairNumber = []
  while (selectedPairNumber.length < 1) {
    let r = Math.floor(Math.random() * 10) + 1
    if (selectedPairNumber.indexOf(r) === -1) {
      selectedPairNumber.push(r)
    }
  }

  return {
    number: selectedNumber.sort((a, b) => a - b),
    // pairNumber: selectedPairNumber.sort((a, b) => a - b),
    id: uuidv4(),
  }
}

export default generateLottery
