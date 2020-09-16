import React from "react"
import StarterBox from "../../components/Card/Card"
import IconWithText from "../../components/IconAndText/IconAndText"
import uuid from "react-uuid"
import { generateBoxes } from "../../util/helperFunctions"
import Typography from "@material-ui/core/Typography"

const Starter = (props) => {
  const { starter } = props
  const [nodes, count] = generateBoxes(starter, 2)
  return (
    <>
      <Typography>Summary</Typography>
      <Typography>Starter Boxes:</Typography>
      <Typography>{nodes.length - 1}</Typography>
      <Typography>Brushes:</Typography>
      <Typography>{count}</Typography>
      <Typography>Replacement Heads:</Typography>
      <Typography>{count}</Typography>
      {nodes.map((node) => {
        const colors = []
        if (node.length !== 0) {
          return (
            <StarterBox key={uuid()}>
              {node.map((ele) => {
                if (!colors.includes(ele.color)) {
                  colors.push(ele.color)
                  return (
                    <>
                      <IconWithText
                        key={uuid()}
                        num={node.filter((el) => el.color === ele.color).length}
                        text="replacement heads"
                        color={ele.color}
                      />
                      <IconWithText
                        key={uuid()}
                        num={node.filter((el) => el.color === ele.color).length}
                        text="Brushes"
                        color={ele.color}
                      />
                    </>
                  )
                }
              })}
            </StarterBox>
          )
        }
      })}
    </>
  )
}

export default Starter
