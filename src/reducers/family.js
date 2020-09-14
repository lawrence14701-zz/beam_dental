
export const familyReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return Object.assign({}, state, {
                familyMembers: action.result
              })
            default:
                return state
    }
}

