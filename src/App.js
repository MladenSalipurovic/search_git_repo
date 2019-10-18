import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import User from './User'; 

class  App extends Component {

  state = {
      login: null,
      bio: null,
      avatar: null
  }
 
  getUserData = (e) => {

    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response);

      const login = response.data.login;
      const bio = response.data.bio;
      const avatar = response.data.avatar_url;

      this.setState({login, bio, avatar})


      console.log(login, bio, avatar);
      console.log(this.state)

    })

    console.log(user);
       

}

  render() {
  
    return(
      <div>
        <User getUserData={this.getUserData}/>
        {this.state.login ? <p><img alt="" src={this.state.avatar}/> {this.state.login} Bio: {this.state.bio}</p>  :<p>Enter github username</p>}
      
      </div>
    )
  }
}
export default App;
