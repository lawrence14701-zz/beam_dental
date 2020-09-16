export const generateStarterBoxes = (boxes) => {
  const nodeArr = []
  const leftOverNodes = []
  // eslint-disable-next-line
  boxes.map((box) => {
    const color = Object.keys(box)[0]
    const { brushes } = Object.values(box)[0]
    let numOfBoxes = Math.floor(brushes / 2)
    const remainder = brushes % 2
    while (numOfBoxes > 0) {
      nodeArr.push({ color: color })
      numOfBoxes -= 1
    }
    if (remainder > 0) {
      leftOverNodes.push({ color: color })
    }
  })
  return [nodeArr, leftOverNodes]
}

export const generateRefillBoxes = (boxes) => {
  let count = 0
  const nodeArr = [[]]
  const leftOverNodes = []
  // eslint-disable-next-line
  boxes.map((box) => {
    const color = Object.keys(box)[0]
    const { brushes } = Object.values(box)[0]
    let remainder = brushes % 4
    let numOfBoxes = brushes - remainder
    count += remainder
    count += numOfBoxes
    const arr = []
    if (numOfBoxes > 0) {
      while (numOfBoxes > 0) {
        if (nodeArr[nodeArr.length - 1].length < 4) {
          nodeArr[nodeArr.length - 1].push({ color })
        } else {
          nodeArr.push(arr)
        }
        numOfBoxes -= 1
      }
    }
    if (remainder > 0) {
      while (remainder > 0) {
        leftOverNodes.push({ color })
        remainder -= 1
      }
    }
  })
  if (leftOverNodes.length > 0) {
    while (leftOverNodes.length > 0) {
      const node = leftOverNodes.shift()
      if (nodeArr[nodeArr.length - 1].length < 4) {
        nodeArr[nodeArr.length - 1].push(node)
      } else {
        nodeArr.push([])
      }
    }
  }
  return [nodeArr, count]
}
