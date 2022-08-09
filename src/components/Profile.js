import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import CardInfo from './CardInfo';

class ProfileU extends Component {
  render() {
    const { user,isAuthenticated } = this.props.auth0;
   
   
    return isAuthenticated &&
       <>
       {console.log(user)}
     <CardInfo name={user.name} email={user.email} picture={user.picture}/>
     {/* <div>Hello {user.name}</div>
     <div>Email: {user.email}</div> */}
     </>
  }
}

export default withAuth0(ProfileU);