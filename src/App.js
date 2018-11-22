import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
});
 
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
});
 
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
});
 
class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignUp();
  }

  render() {

    let routes = (
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/auth'} component={asyncAuth} />
        <Route path={process.env.PUBLIC_URL + "/"} exact component={BurgerBuilder} />
        <Redirect to={process.env.PUBLIC_URL + "/"}/>
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/checkout"} component={asyncCheckout} />
          <Route path={process.env.PUBLIC_URL + "/orders"}  component={asyncOrders} />
          <Route path={process.env.PUBLIC_URL + "/logout"}  component={Logout} />
          <Route path={process.env.PUBLIC_URL + "/auth"}  component={asyncAuth} />
          <Route path={process.env.PUBLIC_URL + "/"} exact component={BurgerBuilder} />
          <Redirect to={process.env.PUBLIC_URL + "/"}/>
        </Switch>
      )
    }

    return (
      <div>
      <Layout>
        {routes}
      </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
