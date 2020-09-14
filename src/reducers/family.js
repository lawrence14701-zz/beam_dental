
export const familyReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return Object.assign({}, state, {
                familyMembers: action.result
              })
        case 'SET_STARTER':
            return
        case 'SET_REFILL':
            return
        case 'RESET_DATA':
            return 
            default:
                return state
    }
}

