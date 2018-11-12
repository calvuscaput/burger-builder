import React, { Component } from 'react'

import classes from './Layout.module.sass'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerTogglehandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return (  
    <>
      <Toolbar drawerToggleClicked={this.sideDrawerTogglehandler}/>
      <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerClosedHandler}/>
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </>
    )
    
  }
}



export default Layout