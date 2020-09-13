
export const dataReducer = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return action.result
            default:
                return state
    }
}

