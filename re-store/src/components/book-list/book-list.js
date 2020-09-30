import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';
class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error, onAddedToCard } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return (
            <BookList books={books} onAddedToCard={onAddedToCard}></BookList>
        )

    }
}
const BookList = ({ books, onAddedToCard }) => {
    return (<ul className="book-list">
        {books.map((book) => {
            return (<li key={book.id}><BookListItem book={book} onAddedToCard={() => onAddedToCard(book.id)} /></li>)
        })}
    </ul>);
}

const mapStateToProrps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
};
const mapDistatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCard: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProrps, mapDistatchToProps)
)(BookListContainer);