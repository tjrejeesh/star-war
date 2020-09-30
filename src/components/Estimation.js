import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export default function Estimation() {
    const { destination1, destination2, destination3, destination4, speed1, speed2, speed3, speed4 } = useSelector((state) => state);
    let totalVal = 0;

    let distance1, distance2, distance3, distance4 = null;

        if(destination1)Object.keys(destination1).forEach(function (key) {
            if (key === 'distance') {
                distance1 = destination1['distance'];
            }
        });
        if(destination2)Object.keys(destination2).forEach(function (key) {
            if (key === 'distance') {
                distance2 = destination2['distance'];
            }
        });
        if(destination3)Object.keys(destination3).forEach(function (key) {
            if (key === 'distance') {
                distance3 = destination3['distance'];
            }
        });
        if(destination4)Object.keys(destination4).forEach(function (key) {
            if (key === 'distance') {
                distance4 = destination4['distance'];
            }
        });

    if(distance1 && speed1)totalVal += distance1/speed1;
    if(distance2 && speed2)totalVal += distance2/speed2;
    if(distance3 && speed3)totalVal += distance3/speed3;
    if(distance4 && speed4)totalVal += distance4/speed4;
    const [ total, setTotal ] = useState(0);

    useEffect(()=>{
        setTotal(totalVal);
    });
    return(
        <div className="timeTaken">Time Taken : {total}</div>
    )
}
