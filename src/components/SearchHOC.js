import _ from 'lodash'
import React, { useEffect, useCallback, useRef } from 'react';
import { Search, Grid, Label } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";
import {planetAPI} from "../API";

const resultRenderer = ({ title }) => <Label content={title} />;

export default function SearchHOC(props) {
    const planetList = [];
    const fetchPlanets = useCallback(async () => {
        const response = await fetch(planetAPI);
        const data = await response.json();
        data.map((result) => (
            planetList.push({title: result.name, distance: result.distance})
        ));
    }, []);

    useEffect(() => {
        fetchPlanets()
    }, [fetchPlanets]);

    const dispatch = useDispatch();
    const { loading, results } = useSelector((state) => state);
    const { position } = props;

    const timeoutRef = useRef();
    const handleSearchChange = useCallback((e, data) => {
        clearTimeout(timeoutRef.current);
        dispatch({ type: 'START_SEARCH_' + position, data: {
                searchID: 'search_' + position,
                destination: data.value
            }});

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY_' + position });
                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i');
            const isMatch = (result) => re.test(result.title);

            dispatch({
                type: 'FINISH_SEARCH_' + position,
                results: _.filter(planetList, isMatch),
            })
        }, 300)
    }, []);
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, []);

    return(
        <Grid>
            <Grid.Column width={6}>
                <Search
                    id={"search" + position}
                    loading={loading}
                    placeholder={"Destination" + position}
                    onResultSelect={(e, data) =>
                        dispatch({ type: 'UPDATE_SELECTION_' + position,
                            data: {
                                destination: 'search_' + position,
                                planetName: data.result.title,
                                distance: data.result.distance
                            }
                        })
                    }
                    onSearchChange={handleSearchChange}
                    resultRenderer={resultRenderer}
                    results={results}
                    /*value={destination}*/
                />
            </Grid.Column>
        </Grid>
    )
}
