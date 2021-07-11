import React, { Component } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import './App.css';

  class App extends Component {
    state = {
      repos: null
    }
    getUser = (e) => {
      e.preventDefault();
      const user = e.target.elements.username.value;
      if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos= res.data.public_repos;
        this.setState({ repos })
      })
    } else return; 
    }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h2 className="App-title">HTTP Calls in React</h2>
      </header>
      <UserForm getUser = {this.getUser}/>
      { this.state.repos ? <p>Number of Repos: {this.state.repos}</p> : 
      <p>Please Enter the user name</p> }
    </div>
    )
  }
}

export default App
