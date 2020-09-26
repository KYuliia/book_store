import React, { Fragment } from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, autor } = book;
    return (
        <Fragment>
            <span>{title}</span>
            <span>{autor}</span>
        </Fragment>
    )
}
export default BookListItem;