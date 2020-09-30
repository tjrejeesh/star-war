import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from  'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import logger from 'redux-logger';
import Header from "./components/Header";
import Footer from "./components/Footer";
import searchReducer from "./store/searchReducer";
import SearchContainer from "./components/SearchContainer";
import Result from "./components/Result";

const store = createStore(
    searchReducer,
    applyMiddleware(logger)
);

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/search">
                    <SearchContainer />
                </Route>
                <Route exact path="/result">
                    <Result />
                </Route>
                <Route exact path="/">
                    <SearchContainer />
                </Route>
            </Switch>
            <Footer/>
        </Router>
    </Provider>
  );
}

export default App;

