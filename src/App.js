import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './App.css';
import Repos from './components/Repos/Repos';
import Cards from './components/Cards/Cards'; 


class  App extends Component {
  
  state = { 
      users: [],
      repos: [],
      filter: ""
  }

  updateFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  
    async componentDidMount() {
  
      const response = await axios.get(`https://api.github.com/users`)
      
      this.setState({users: response.data})
    
    }

  clickHandler = async (e) => {

    const response = await axios.get(`https://api.github.com/users/${e.target.id}/repos`)
    this.setState({repos: response.data})
  } 


  render() {
  
    return(
      <Fragment>
        <input type="search" 
        placeholder="Search Github user" 
        className="input-field" 
        onChange={this.updateFilter}/>
        <div className="container">
            <Cards users={this.state.users} 
            clickHandler={this.clickHandler}
            filter={this.state.filter}/>
            <Repos repos={this.state.repos}/> 
        </div>
      </Fragment>
    )
  }
}
export default App;
