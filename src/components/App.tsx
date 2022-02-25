import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import DataService from '../services/DataService';
import { Login } from './Login';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../utils/history';
import Nav from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Spaces from './spaces/Spaces';



interface AppState{
  user: User | undefined
}

 
class App extends React.Component<{},AppState>{

  private authService: AuthService = new AuthService();
  private dataService: DataService= new DataService(this.props);

  constructor(props: any){
    super(props)
    this.state= {user: undefined}
    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User){
    this.setState({user: user})
    console.log('setting user: ', user)
  }

  render() { 
    return ( 
      <>
    <div className="wrapper">
      <Router history={history}>
        <div>
          <Nav user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login">
              <Login authService={this.authService} setUser={this.setUser}  />
              </Route>
              <Route exact path="/profile">
                <Profile authService = {this.authService} user={this.state.user}></Profile>
              </Route>
              <Route exact path="/spaces">
                <Spaces dataService={this.dataService}/>
              </Route>
          </Switch>
        </div>

      </Router>
    </div>
    {/* <Login  authService={this.authService} setUser={this.setUser}/> */}
    </>
     );
  }
}
 
export default App ;

