const initialState = {
    taskPoints: 0
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ('Increase'): 
            return  { taskPoints: state.taskPoints + 1};
        default:
            return state;
    }
}

export default rootReducer;