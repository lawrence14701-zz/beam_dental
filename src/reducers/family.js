
export const familyReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return action.result
            default:
                return state
    }
}

