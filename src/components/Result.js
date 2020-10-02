import React, {useState, useEffect, useCallback} from 'react';
import {tokenAPI, findAPI} from "../API";
import {useSelector} from "react-redux";
import Estimation from "./Estimation";
import missionImg from "../assets/images/mission-details.png";
import {Image} from "semantic-ui-react";

export default function EstimationResult() {
    const [results, setResults] = useState([]);
    const { destination1, destination2, destination3, destination4, vehicle_names } = useSelector((state) => state) || {};

    let selectedDestination1, selectedDestination2, selectedDestination3, selectedDestination4 = null;

    if(destination1)Object.keys(destination1).forEach(function (key) {
        if (key === 'planetName') {
            selectedDestination1 = destination1['planetName'];
        }
    });
    if(destination2)Object.keys(destination2).forEach(function (key) {
        if (key === 'planetName') {
            selectedDestination2 = destination2['planetName'];
        }
    });
    if(destination3)Object.keys(destination3).forEach(function (key) {
        if (key === 'planetName') {
            selectedDestination3 = destination3['planetName'];
        }
    });
    if(destination4)Object.keys(destination4).forEach(function (key) {
        if (key === 'planetName') {
            selectedDestination4 = destination4['planetName'];
        }
    });

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
        };
        fetch(tokenAPI, requestOptions)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('token', response.token)
            })
            .catch(error => console.log(error));
    });

    const findFalcone = useCallback(async () => {
        const requestOptionsFind = {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({
                "token": localStorage.getItem('token'),
                "planet_names": [
                    selectedDestination1,
                    selectedDestination2,
                    selectedDestination3,
                    selectedDestination4
                ],
                "vehicle_names": vehicle_names
            })
        };
        await fetch(findAPI, requestOptionsFind)
            .then(response => response.json())
            .then(response => {
                setResults(response);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        findFalcone()
    }, [findFalcone]);

    return(
        <div className="container">
            <h1>Finding Falcone !</h1>
            {(results.status === "success") ?
                <div>
                    <h2 className="success">Success! Congratulations on Finding Falcone. King Shan is mightly pleased</h2>
                    <Estimation/>
                    <div className="planet">Planet Found : {results.planet_name}</div>
                </div> : ''
            }
            <div className="failure">
            {(results.status === "false") ?
                <h3>Better Luck next time</h3> : ''}
                <h3>{results.error}</h3>
            </div>
            <Image src={missionImg} width="100%"/>
        </div>)
}
