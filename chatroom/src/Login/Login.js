import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(evt) {   
        let nm = evt.target.value;
        this.setState({name: nm});
    }

    onKeyDown(e) {
      if (e.key === "Enter") {
        this.props.onLog(this.state.name);
      }
    }

    render() {
        return (
        <div>
            <input type="text" 
            value={this.state.text} 
            onChange={this.onChange} 
            onKeyDown={this.onKeyDown}
            placeholder="please, enter your name"></input>
            
        </div>
        )

    }
}

export default Login;
