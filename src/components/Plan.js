import React from 'react';
import { planos } from '../dados';

const Plan = (props) => {

    return (
        <div>
            <h4>Escolha seu plano!</h4>
            <select onChange ={props.inputPlan} id ="plan">
                <option value="" defaultValue></option>
                {planos.map((item) => {
                    return <option value={item.fanquia}>{item.nome}</option>
                })}
            </select>
        </div>
    );
}

export default Plan;
