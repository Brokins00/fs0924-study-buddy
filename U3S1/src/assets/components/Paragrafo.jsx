/* eslint-disable react/prop-types */
import { Component } from "react";

class Paragrafo extends Component {
    render() {
        return (
            <>
                <h2>Titolo paragrafo</h2>
                <p>{this.props.paragrafo}</p>
                <img src="http://localhost:5173/src/assets/react.svg" alt="React" />
            </>
        )
    }
}

export default Paragrafo;