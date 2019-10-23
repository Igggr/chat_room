import React from 'react';
import socketIoClient from 'socket.io-client';
import Message from '../Message/Message';
import TypedMessage from '../TypedMessage/TypedMessage';
import './Dialog.css';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messageHistory: []};
        this.socket = socketIoClient("http://127.0.0.1:4001");
    }

    componentDidMount() {
        console.log("mount");
        this.socket.emit("client typed new message", {"content": "client loaded..", "author": "server"});
        
        this.socket.on("update chat", (msg) => {
          console.log(msg);
          const updatedHistory = this.state.messageHistory.concat(msg);
          this.setState({messageHistory : updatedHistory});
        });     
    }

    render() {
        let messages = this.state.messageHistory.map(
            (msg, i) => <Message key={i} author={msg.author} content={msg.content}></Message>
        );
        return <div className="Dialog">
            <span>dialog</span>
            {messages}
            <TypedMessage onNewMessageTyped={this.props.onNewMessageTyped}></TypedMessage>
            </div>;
    }
}

export default Dialog;
