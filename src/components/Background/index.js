import React from 'react';
import styled from 'styled-components';
import "../../styles/background.css";

const Container = styled.div`
position: relative;
width: 80%
height:56vh !important;
margin-left:auto;
margin-right:auto;
margin-top:0;
vertical-align:middle
`

function Background() {
    return (
        <Container className="text-center">
            <div className="container">
            </div>
        </Container>

    )
}

export default Background;