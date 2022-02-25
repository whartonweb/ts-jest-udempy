import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { User } from '../model/Model';


 
class Nav extends Component<{user:User | undefined}> {

    render() { 
        let loginLogOut:any;
        if(this.props.user){
            loginLogOut = <Link to ='/logout' style={{ float:'right'}}>{this.props.user.userName}</Link>
        }
        else{
            loginLogOut = <Link to ='/login' style={{ float:'right'}}>Login</Link>
        }
       
        return (<div className="navbar">
            <Link to ='/profile'>Profile</Link>
            <Link to='/' >Home</Link>
            <Link to='/Spaces' >Spaces</Link>
            {loginLogOut}
            </div> );
    }
}
 
export default Nav;