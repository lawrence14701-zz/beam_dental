export const generateBoxes = (boxes) => {
  const nodeArr = []
  const leftOverNodes = []
  // eslint-disable-next-line
  boxes.map((box) => {
    const color = Object.keys(box)[0]
    const { brushes } = Object.values(box)[0]
    const numOfBoxes = Math.floor(brushes / 2)
    const remainder = brushes % 2

    for (let i = 0; i < numOfBoxes; i += 2) {
      nodeArr.push({ color: color })
    }
    if (remainder > 0) {
      leftOverNodes.push({ color: color })
    }
  })
  return [nodeArr, leftOverNodes]
}
