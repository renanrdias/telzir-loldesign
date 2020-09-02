import React, { useState } from 'react';
import Tempo from './Tempo';
import Plan from './Plan';
import Button from './Button';
import Reset from './Reset';
import { info, percentage, origens } from '../dados';
import Results from './Results';



const Selection = () => {
    const [myOrigin, setMyOrigin] = useState("");
    const [myDestination, setMyDestination] = useState("");
    const [myTime, setMyTime] = useState("");
    const [myPlan, setMyPlan] = useState("");
    const [faleMais, setFaleMais] = useState(0);
    const [semFaleMais, setSemFaleMais] = useState(0);

    const handleOrigin = (event) => {
        const origin = event.target.value;
        setMyOrigin(origin);
    }

    const handleDestination = (event) => {
        const destination = event.target.value;
        setMyDestination(destination);
    }

    const handleTime = (event) => {
        const minutes = event.target.value;
        setMyTime(minutes);
    }

    const handlePlan = (event) => {
        const planValue = event.target.value;
        setMyPlan(planValue);
    }

    const resetData = () => {
        setMyOrigin("");
        setMyDestination("");
        setMyTime(0);
        setMyPlan("");
        setFaleMais(0);
        setSemFaleMais(0);        
    }   

    const toCalculate = () => {
        let finalFaleMais = 0;
        let finalSemFaleMais = 0;
        for(var i = 0; i < info.length; i++){
            if(myOrigin === info[i].origem && myDestination === info[i].destino){
                if(Number(myTime) <= Number(myPlan)){
                    finalFaleMais = 0;
                    finalSemFaleMais = info[i].preco * myTime;                    
                } else {
                    finalFaleMais = info[i].preco * (1 + percentage) * (myTime - myPlan);
                    finalSemFaleMais = info[i].preco * myTime;
                }                    
            }
        }
        setFaleMais(finalFaleMais.toFixed(2));
        setSemFaleMais(finalSemFaleMais.toFixed(2));
    }

    return (
        <div>
            <h4 className ="header-origem">Selecione o DDD de origem:</h4>
            <select className="select-origem" onChange={handleOrigin} value={myOrigin}>
                <option value="" defaultValue></option>
                {origens.map((item) => {
                    return <option value={item}>{item}</option>
                })}
            </select>
             
            {myOrigin !== "" ? <div>
                <h4>Selecione o DDD de destino:</h4>
                <select className="select-destino" onChange={handleDestination} value={myDestination}>
                    <option value="" defaultValue></option>
                    {info.map((item) => {
                        if(item.origem === myOrigin) {
                        return <option value={item.destino}>{item.destino}</option>                            
                        }
                    })}

                </select>
            </div> : null}                              
            
            {myOrigin !== "" && myDestination !== "" ? <Tempo inputTime = {handleTime} timeValue={myTime} /> : null}
            {myTime > 0 ? <Plan inputPlan = {handlePlan} /> : null}
            {myPlan !== ""  ? <Button onCalc = {toCalculate} /> : null}
            {faleMais !== 0 || semFaleMais !== 0 ? <div><Results cfm = {faleMais} sfm = {semFaleMais} /> <Reset toReset = {resetData} /></div> : null}
            
            
        </div>
    );        
    
        
}


export default Selection;



