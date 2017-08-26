import React, { Component } from "react";
import styled from "styled-components";

class MainMap extends Component {
    render() {
        const Div = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: blue;
            height: 98%;
            width: 98%;
        `;

        return (
            <Div>
                <h3>This is where the main map goes</h3>
            </Div>
        );
    }
}

export default MainMap;
