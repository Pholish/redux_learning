import React, { Component } from 'react';
import styled from 'react-emotion';

class Header extends Component {
    render() {
        const { status } = this.props;
        return (
            <Fixed>
                <HeaderContainer>
                    <Logo>Logo</Logo>
                    <Status status={status}>
                        {status ? 'loading' : 'loaded'}
                    </Status>
                </HeaderContainer>
            </Fixed>
        );
    }
}

const Fixed = styled('div')`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
`;

const HeaderContainer = styled('div')`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border: solid 1px #e1e1e1;
    border-top: none;
    padding: 0px 20px;
`;

const Logo = styled('h1')`
    margin: 0;
    color: #444;
`;
const Status = styled('span')`
    color: ${props => (props.status ? 'red' : 'lawngreen')};
    font-size: 14px;
`;

export default Header;
