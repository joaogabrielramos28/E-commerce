import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductPage from '../pages/Product';
import Register from '../pages/Register';
const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/product/:name" component={ProductPage} />
    </Switch>
);

export default Routes;
