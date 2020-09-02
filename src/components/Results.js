import React from 'react';

const Results = (props) => {
    return(
        <div className = "results">
            <div className="comFaleMais">
                <h3>Com o fale mais!</h3>
                <p>{`$ ${props.cfm}`}</p>
            </div>
            <div className="semFaleMais">
                <h3>Sem o fale mais!</h3>
                <p>{`$ ${props.sfm}`}</p>
            </div>
        </div>
    );
}


export default Results;