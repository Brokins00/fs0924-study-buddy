import { Component } from "react";

class NewApp extends Component {
    state = {
        count: 0
    }
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    onCountClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const count = this.state.count;
        return (
            <button onClick={this.onCountClick}>Count {count}</button>
        )
    }
}

export default NewApp;