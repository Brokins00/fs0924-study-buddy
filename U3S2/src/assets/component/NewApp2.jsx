/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function NewApp2(props) {
    return (
        <button onClick={() => props.onCountChange(props.count + 1)}>Count Nuovo {props.count}</button>
    )
}

export default NewApp2