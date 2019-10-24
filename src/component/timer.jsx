import React, { Component } from 'react';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    timerID = null;

    componentDidMount() {
        this.timerID = setInterval( () => {
            this.setState({date: new Date()})
           }, 1000);
    }

    componentDidUpdate() {
        console.log("New 'change' for every update");
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>{`${this.state.date.getHours()}h ${this.state.date.getMinutes()}m ${this.state.date.getSeconds()}s`}</div>
        )
    }
}