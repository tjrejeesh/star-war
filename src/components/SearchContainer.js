import React from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import Estimation from "./Estimation";
import SearchHOC from "./SearchHOC";
import VehicleHOC from "./VehicleHOC";

export default function SearchContainer() {
    const history = useHistory();
    const searchResults = () =>{
        let path = `result`;
        history.push(path);
    };

    return(
        <div className="container">
            <h1>Finding Falcone !</h1>
            <Grid>
                <Grid.Column width={3}>
                    <SearchHOC position="1" destination="destination1"/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <SearchHOC position="2" destination="destination2"/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <SearchHOC position="3" destination="destination3"/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <SearchHOC position="4" destination="destination4"/>
                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Column width={3}>
                    <VehicleHOC position="1"/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <VehicleHOC position="2"/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <VehicleHOC position="3"/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <VehicleHOC position="4"/>
                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Button className="searchBtb" onClick={searchResults}>Find Falcone !</Button>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Estimation/>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        </div>
    )
}
