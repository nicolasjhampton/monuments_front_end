import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";

import store from "./store";

import { MainMap } from "./components";

class App extends Component {
    render() {
        const MainContainer = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
        `;
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <MainContainer>
                        <Route component={MainMap} />
                    </MainContainer>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
