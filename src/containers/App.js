import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './Layout';

class App extends Component {
    render() {
        const { store } = this.props;
        return <Layout store={store} />;
    }
}

const mapStateToProps = store => {
    return { store };
};

export default connect(mapStateToProps)(App);
