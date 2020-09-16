export const generateBoxes = (boxes, max) => {
  let count = 0
  const nodeArr = []
  const leftOverNodes = []
  // eslint-disable-next-line
  boxes.map((box) => {
    const color = Object.keys(box)[0]
    const { brushes } = Object.values(box)[0]
    let remainder = brushes % max
    let numOfBoxes = brushes - remainder
    count += remainder
    count += numOfBoxes
    if (nodeArr.length === 0 && count > 0) {
      nodeArr.push([])
    }
    while (numOfBoxes > 0) {
      if (nodeArr[nodeArr.length - 1].length < max) {
        nodeArr[nodeArr.length - 1].push({ color })
      } else {
        nodeArr.push([{ color }])
      }
      numOfBoxes -= 1
    }
    while (remainder > 0) {
      leftOverNodes.push({ color })
      remainder -= 1
    }
  })
  while (leftOverNodes.length > 0) {
    const node = leftOverNodes.shift()
    if (nodeArr[nodeArr.length - 1].length < max) {
      nodeArr[nodeArr.length - 1].push(node)
    } else {
      nodeArr.push([node])
    }
  }
  return [nodeArr, count]
}
