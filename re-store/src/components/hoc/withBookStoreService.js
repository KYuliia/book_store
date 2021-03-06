import React from 'react';
import { BookStoreConsumer } from '../bookstore-service-context';
const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped  {...props}
                            bookstoreService={bookstoreService} />)
                    }}
            </BookStoreConsumer>
        )
    }
}
export default withBookstoreService;