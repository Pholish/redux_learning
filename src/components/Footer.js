import React, { Component } from 'react';
import styled from 'react-emotion';

class Footer extends Component {
    render() {
        return (
            <Container>
                <Copyright>
                    <Author>&#169; rakheb_l</Author>
                </Copyright>
            </Container>
        );
    }
}

const Container = styled('div')`
    display: flex;
    height: 60px;
    justify-content: flex-end;
    align-items: center;
    border: solid 1px #e1e1e1;
    padding: 0px 20px;
`;

const Copyright = styled('div')``;

const Author = styled('span')`
    font-size: 16px;
    color: red;
`;

export default Footer;
