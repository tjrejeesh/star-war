import React from 'react';
import {
    useHistory
} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const resetSearch = ()=> {
        dispatch({ type: 'RESET'});
        history.push("/");
    };
    return(
        <header>
            <div className="title">Star War</div>
            <div className="sub-title">
                <div className="reset" onClick={resetSearch}>Reset</div>
            </div>
        </header>
    )
}
