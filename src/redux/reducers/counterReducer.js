const INITIAL_STATE = {
    value: 0
};

export default function counterReducer(state = INITIAL_STATE, action){
    console.log(state);

    switch(action.type){
        case 'INCREASE': return {...state, value: ++state.value};
        case 'DECREASE': return {...state, value: --state.value};
        default: return state;
    }
}