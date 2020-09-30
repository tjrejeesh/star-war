import React, {useCallback, useEffect, useState} from "react";
import { vehicleAPI } from "../API";
import {useDispatch, useSelector} from "react-redux";


export default function VehicleHOC(props) {
    const [ vehicles, setVehicles ] = useState('');
    const { destination1, destination2, destination3, destination4 } = useSelector((state) => state);
    const dispatch = useDispatch();

    const { position } = props;

    let selectedDistance = null;
    let destinationStored = null;

    switch(position){
        case '1':
            destinationStored = destination1;
            break;
        case '2':
            destinationStored = destination2;
            break;
        case '3':
            destinationStored = destination3;
            break;
        case '4':
            destinationStored = destination4;
            break;
        default:
            break
    }

    if(destinationStored) {
        Object.keys(destinationStored).forEach(function (key) {
            if (key === 'distance') {
                selectedDistance = destinationStored['distance'];
            }
        });
    }

    const fetchVehicles = useCallback(async () => {
        const response = await fetch(vehicleAPI);
        const data = await response.json();
        setVehicles(data);
    }, []);

    const selectedVehicle = (e, speed)=> {
        dispatch({ type: 'VEHICLE_NAMES', vehicle_name: e.target.value });
        dispatch({ type: 'VEHICLE_SPEED_' + position, speed: speed });
    };



    useEffect(() => {
        fetchVehicles()
    }, [fetchVehicles]);
    return(
        <div>
            {selectedDistance && vehicles && vehicles.map((vehicle, i) =>
                (
                    (vehicle.max_distance >= selectedDistance) ?
                        <div key={i}><input id={"vehicle"+i}
                                            name={"Destination" + position}
                                            value={vehicle.name}
                                            onClick={(e) => selectedVehicle(e, vehicle.speed)}
                                            type="radio"/>
                            {vehicle.name + '(' + vehicle.total_no + ')'}
                        </div> :
                        ''
                ))
            }
        </div>
    )
}
