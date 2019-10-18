import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import User from './User'; 


class  App extends Component {

  state = {
      login: null,
      location: null,
      avatar: null
  }
 
  getUserData = (e) => {

    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response);

      const login = response.data.login;
      const location = response.data.location;
      const avatar = response.data.avatar_url;

      this.setState({login, location, avatar})


      console.log(login, location, avatar);
      console.log(this.state)

    })

    console.log(user);
       

}

  render() {
  
    return(
      <div>
        <User getUserData={this.getUserData}/>
        {this.state.login ? <p className="card"><img alt="" src={this.state.avatar}/> {this.state.login} {this.state.location}</p>  :<p>Enter github username</p>}
      </div>
    )
  }
}
export default App;
