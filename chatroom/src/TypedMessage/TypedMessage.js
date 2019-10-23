import React from 'react';

class TypedMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {typedText: ""};
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(evt) {
        let text = evt.target.value;
        this.setState({typedText: text});
    }

    onKeyDown(e) {
        if (e.key === 'Enter') {
            const text = this.state.typedText;
            this.setState({typedText: ""});
            this.props.onNewMessageTyped(text);
        }
    }
    
    render() {
        return <input type="text" 
        value={this.state.typedText}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        ></input>
    }
}

export default TypedMessage;
