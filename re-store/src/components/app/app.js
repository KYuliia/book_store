import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';

import { withBookstoreService } from '../hoc';
import { HomePage, CardPage } from '../pages';
const App = () => {

    return (<Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/card' component={CardPage} />
    </Switch>)
}
export default withBookstoreService()(App);