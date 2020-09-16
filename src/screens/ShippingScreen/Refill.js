import React from "react"
import RefillBox from "../../components/Card/Card"
import IconWithText from "../../components/IconAndText/IconAndText"
import uuid from "react-uuid"
import { generateRefillBoxes } from "../../util/helperFunctions"
import Typography from "@material-ui/core/Typography"

const Refill = (props) => {
  const { refill } = props
  const [nodes, count] = generateRefillBoxes(refill)

  return (
    <>
      <Typography>Summary</Typography>
      <Typography>Refill Boxes:</Typography>
      <Typography>{nodes.length - 1}</Typography>
      <Typography>Replacement Heads:</Typography>
      <Typography>{count}</Typography>
      {nodes.map((node) => {
        const colors = []
        if (node.length !== 0) {
          return (
            <RefillBox key={uuid()}>
              {node.map((ele) => {
                if (!colors.includes(ele.color)) {
                  colors.push(ele.color)
                  return (
                    <IconWithText
                      key={uuid()}
                      num={node.filter((el) => el.color === ele.color).length}
                      text="replacement heads"
                      color={ele.color}
                    />
                  )
                }
              })}
            </RefillBox>
          )
        }
      })}
    </>
  )
}

export default Refill
