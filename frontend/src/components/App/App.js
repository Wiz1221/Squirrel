import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//import components
import NavBar from '../NavBar/NavBar';
import ChatField from '../ChatField/ChatField';
import ChatInput from '../ChatInput/ChatInput';
// const socket = io();
// console.log(socket)

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">

        <NavBar/>
        <ChatField/>
        <ChatInput/>
      </div>
    );
  }
}

export default App;
