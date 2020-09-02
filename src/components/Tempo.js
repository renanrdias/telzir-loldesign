import React from 'react';

const Tempo = (props) => {   

    return (
        <div>
            <h4>Quanto tempo gostaria de falar?</h4>
            <input onChange={props.inputTime} type ="number" placeholder = "minutos" value ={props.timeValue}></input>
        </div>
    );
}

export default Tempo;