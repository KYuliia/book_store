const initialStore = {
    books: [],
    loading: true,
    error: null,
    cardItems: [{
        id: 1,
        name: "Book 1",
        count: 3,
        total: 120
    },
    {
        id: 2,
        name: "Book 2",
        count: 4,
        total: 160
    },
    ],
    orderTotal: 220
}
const reducer = (state = initialStore, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS': {
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        };
        case 'FETCH_BOOKS_REQUEST': {
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        };
        case 'FETCH_BOOKS_FAILURE': {
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        };
        case 'BOOK_ADDED_TO_CARD': {
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const newItem = {
                id: book.id,
                name: book.title,
                count: 1,
                total: book.price
            };
            return {
                ...state,
                cardItems: [
                    ...state.cardItems,
                    newItem
                ]
            }
        };
        default: {
            return state
        }
    }
}
export default reducer;