import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {color: props.value} // ...define initial state with a key of 'color' set to the 'value' prop
    }

    divClicked = () => {
        this.setState({color: '#333'})
    }

    render() {
        console.log(this.props.value);
        return (
            <div className="cell" style={{backgroundColor: this.state.color }} onClick={this.divClicked}></div>
        )
    }
}
