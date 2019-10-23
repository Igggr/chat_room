import React from 'react';
import './Message.css';

class Message extends React.Component {
    render() {
        return <div className="Message">
            <div>{this.props.author}:</div>
            <div>{this.props.content}</div>
        </div>
    }
}

export default Message;