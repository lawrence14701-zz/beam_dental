
export const familyReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return Object.assign({}, state, {
                familyMembers: action.result
              })
        case 'SET_STARTER':
            return {
                ...state,
                familyMembers : state.familyMembers.map(member => (
                    member.id === action.rowData.id ? {...member, starter: true, refill: false} : member
                ))
            }
        case 'SET_REFILL':
            return {
                ...state,
                familyMembers : state.familyMembers.map(member => (
                    member.id === action.rowData.id ? {...member, starter: false, refill: true} : member
                ))
            }
        case "RESET_DATA":
            return {
                ...state,
                familyMembers : state.familyMembers.map(member => (
                    {...member, starter: false, refill: false}
                ))
            }
            default:
                return state
    }
}

