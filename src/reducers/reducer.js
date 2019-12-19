export default quotesReducer = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_QUOTES':
            return action.quotes
    }
}