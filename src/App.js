import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search/Search';
import Cards from './components/Cards/Cards'; 


class  App extends Component {
  
  state = { 
      users: []
  }

  
  getData = (e) => {
    
    e.preventDefault();
    const name = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${name}`)
    .then((response) => {
      console.log(response);

      const users = response.data;

      this.setState(prevState =>({
        users: [...prevState.users, response.data]
      })
      )

      console.log(users);
      console.log(this.state);
      console.log(this.state.users)
    })
  }
  
  render() {
  
    return(
      <Fragment>
        <div>
          <Search getData={this.getData}/>
          <Cards showCards={this.state.users}/>
          
        </div>
      </Fragment>
    )
  }
}
export default App;
