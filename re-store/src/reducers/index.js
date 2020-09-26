const initialStore = {
    books: [
    ]
}
const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED': {
            return {
                books: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;