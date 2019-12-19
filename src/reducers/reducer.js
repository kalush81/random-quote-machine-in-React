export default function quotesReducer (state = [], action)  {
    switch(action.type) {
        case 'FETCH_QUOTES':
            return action;
        default:
            return state;    
    }
}