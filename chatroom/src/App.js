import React from 'react';
import socketIoClient from 'socket.io-client';
import './App.css';
import Dialog from './Dialog/Dialog';
import Login from './Login/Login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"logged": false, "name" : ""};
    this.socket = socketIoClient("http://127.0.0.1:4001");
    this.onLog = this.onLog.bind(this);
    this.onNewMessageTyped = this.onNewMessageTyped.bind(this);
  }
  
  onLog(name) {
    this.setState({logged: true, "name" : name});
    this.socket.emit("user logged in", name);
  }
  
  onNewMessageTyped(text) {
    this.socket.emit("client typed new message", {"author": this.state.name, "content" : text});
  }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">         
          { this.state.logged 
               ? 
               <Dialog onNewMessageTyped={this.onNewMessageTyped}/>
               : 
               <Login onLog={this.onLog}/>
          }
      </header>
     
    </div>
  );
  }
}

export default App;
