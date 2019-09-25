import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';

class PrivateRoute extends Component{

  render() {
    const { component: Component, ...rest } = this.props;
    const user = this.props.user;
    const has_filled_data = user.first_name && user.last_name
    return(
      <Route {...rest} render={(props) => {
        const isLoggedIn = localStorage.getItem('jwtToken')
        if(!isLoggedIn) {
          return <Redirect to={{
              pathname: "/",
              state: { from: props.location }
            }} />
        }
        if(isLoggedIn && has_filled_data) {
          return  <Component {...props} {...rest}/>
        }
        if(isLoggedIn && !has_filled_data) {
          return <Redirect to={'/player/profile'} />
        }
        return <Redirect to={'/teams'} />
      }} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);

