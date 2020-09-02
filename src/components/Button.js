import React from 'react';

const Button = (props) => {
    return(
        <button className ="calc" onClick ={props.onCalc}>Calcular!</button>
    );
}

export default Button;