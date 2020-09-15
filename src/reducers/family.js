export const familyReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return Object.assign({}, state, {
        familyMembers: action.result,
        starter: [
          { blue: { brushes: 0, replacementHeads: 0 } },
          { pink: { brushes: 0, replacementHeads: 0 } },
          { green: { brushes: 0, replacementHeads: 0 } },
        ],
        refill: [
          { blue: { brushes: 0, replacementHeads: 0 } },
          { pink: { brushes: 0, replacementHeads: 0 } },
          { green: { brushes: 0, replacementHeads: 0 } },
        ],
      })
    case "SET_STARTER":
      return {
        ...state,
        familyMembers: state.familyMembers.map((member) =>
          member.id === action.rowData.id
            ? { ...member, starter: true, refill: false }
            : member
        ),
        starter: state.starter.map((color) => {
          const colorType = Object.keys(color)[0]
          let brushes = Object.values(color)[0].brushes
          let replacementHeads = Object.values(color)[0].replacementHeads
          return colorType === action.rowData.brush_color
            ? {
                [colorType]: {
                  brushes: (brushes += 1),
                  replacementHeads: (replacementHeads += 1),
                },
              }
            : color
        }),
      }
    case "SET_REFILL":
      return {
        ...state,
        familyMembers: state.familyMembers.map((member) =>
          member.id === action.rowData.id
            ? { ...member, starter: false, refill: true }
            : member
        ),
        refill: state.refill.map((color) => {
          const colorType = Object.keys(color)[0]
          let brushes = Object.values(color)[0].brushes
          let replacementHeads = Object.values(color)[0].replacementHeads
          return colorType === action.rowData.brush_color
            ? {
                [colorType]: {
                  brushes: (brushes += 1),
                  replacementHeads: (replacementHeads += 1),
                },
              }
            : color
        }),
      }
    case "RESET_DATA":
      return {
        ...state,
        familyMembers: state.familyMembers.map((member) => ({
          ...member,
          starter: false,
          refill: false,
        })),
      }
    default:
      return state
  }
}
