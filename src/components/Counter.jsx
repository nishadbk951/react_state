import "./Counter.css"
import React, {Component} from "react";

class Counter extends Component{
    state = { // state = store changable component data
        count:0

    };
    // setstate = update state and re-render the component
    increment = () =>{
        this.setState((previosState) =>({
            count: previosState.count + 1
        }));
    };
    decrement = () =>{
        this.setState((previosState) =>({
            count: previosState.count - 1
        }));
    };
    reset = () => {
        this.setState({
            count:0
        });
    };
    render() {
        return(
            <div>
                <h1 className="text-color">class component counter</h1>
                <h2 className="count">count : {this.state.count}</h2>
                <button className="text-inc" onClick={this.increment}>increment</button>
                <button className="text-dec" onClick={this.decrement}>decrement</button>
                <button className="text-res" onClick={this.reset}>reset</button>
            </div>
        );
    }
}

export default Counter;