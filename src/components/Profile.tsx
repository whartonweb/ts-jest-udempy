import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { User, UserAttribute } from '../model/Model';
import { AuthService } from '../services/AuthService';

interface ProfileProps {
    user: User | undefined,
    authService: AuthService
}
 
interface ProfileState {
    userAttributes: UserAttribute[],
}
 
class Profile extends Component<ProfileProps, ProfileState> {
    async componentDidMount(){
        if(this.props.user){
            const userAttrs = await this.props.authService.getUserAttributes(this.props.user)
            this.setState({
                userAttributes: userAttrs
            })
        }
    }
    state: ProfileState ={
        userAttributes: []
    }
    private renderUserAttributes(){

        const rows =[];
        for (const userAttribute of this.state.userAttributes) {
            rows.push(
                <tr><td>{userAttribute.Name}:</td>
                <td>{userAttribute.Value}</td></tr>
                )
        }
        return <table><tbody>{rows}</tbody></table>

    }
    render() { 
        let profileSpace:any
        if(this.props.user){
          profileSpace = <div> <h3>Hello, {this.props.user.userName}</h3>
          {/* <p>Here is your Atributes{this.renderUserAttribute}</p></div> */}
                <div>Here are your Atributes{this.renderUserAttributes()}</div>
                </div>
        }else{
            profileSpace = <div>
                Please <Link to="/login">Login</Link>
                </div>
        }
        return (
        <div>Welcome to the Profile Page
            {profileSpace}
        </div>
         );
    }
}
 
export default Profile;