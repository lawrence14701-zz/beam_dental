import React from "react"
import RefillBox from "../../components/Card/Card"
import IconWithText from "../../components/IconAndText/IconAndText"
import uuid from "react-uuid"
import { generateBoxes } from "../../util/helperFunctions"
import Typography from "@material-ui/core/Typography"
import Container from "../../components/CardContainer/CardContainer"

const Refill = (props) => {
  const { refill } = props
  const [nodes, count] = generateBoxes(refill, 4)
  const renderItems = (colors, node) => {
    const arr = []
    node.forEach((ele) => {
      if (!colors.includes(ele.color)) {
        colors.push(ele.color)
        arr.push(
          <IconWithText
            key={uuid()}
            num={node.filter((el) => el.color === ele.color).length}
            text="replacement heads"
            color={ele.color}
          />
        )
      }
    })
    return arr
  }
  const renderBoxes = () => {
    const arr = []
    nodes.forEach((node) => {
      const colors = []
      if (node.length !== 0) {
        arr.push(<RefillBox key={uuid()}>{renderItems(colors, node)}</RefillBox>)
      }
      return arr
    })
  }
  return (
    <>
      <Typography>Summary</Typography>
      <Typography>Refill Boxes:</Typography>
      <Typography>{nodes.length}</Typography>
      <Typography>Replacement Heads:</Typography>
      <Typography>{count}</Typography>
      <Container data={renderBoxes()} />
    </>
  )
}

export default Refill
