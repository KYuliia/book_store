import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';
class BookList extends Component {
    componentDidMount() {
        // receive data
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();

        //dispatch action to store
        this.props.booksLoaded(data)
    }
    render() {
        const { books } = this.props;
        return (
            <ul className="book-list">
                {books.map((book) => {
                    return (<li key={book.id}><BookListItem book={book} /></li>)
                })}
            </ul>
        )

    }
}

const mapStateToProrps = ({ books }) => {
    return { books }
};
const mapDistatchToProps = { booksLoaded }

export default compose(
    withBookstoreService(),
    connect(mapStateToProrps, mapDistatchToProps)
)(BookList);