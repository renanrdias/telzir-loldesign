import React from 'react';

const Reset = (props) => {
    return(
        <button className ="button-reset" onClick = {props.toReset}>Reset</button>
    );
}

export default Reset;