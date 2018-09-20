import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'react-emotion';

import Header from '../components/Header';
import Content from '../containers/Content';
import Footer from '../components/Footer';

class Layout extends Component {
    render() {
        const { store } = this.props;
        return (
            <Wrapper>
                <Header status={store.data.loading} />
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/:id" component={Content} />
                </Switch>
                <Footer />
            </Wrapper>
        );
    }
}

const Wrapper = styled('div')`
    max-width: 1150px;
    margin: 0 auto;
`;

export default Layout;
