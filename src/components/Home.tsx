import React, { Component } from 'react'
import { User } from '../model/Model';


interface HomeProps {
user:User
}
 
interface HomeState {
    
}
 
class Home extends Component<HomeProps, HomeState> {

    render() { 
        return (<div className="home">
     Welcome to the home page
        </div> );
    }
}
 
export default Home;