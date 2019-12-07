import React, { Component } from "react";

class FirstReactComponent extends Component {
    constructor() {
        super();
        this.state = { value: '' };

       // this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <div>My First Component in React</div>
                <input type="text" onChange={ this.handleChange } />
                <div>{ this.state.value }</div>
            </div>
        )
    }
}

export default FirstReactComponent;