import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/productActions';
import { setLimit } from '../actions/pageActions';
import Posts from '../components/Posts';

class Content extends Component {
    state = {
        currPage:
            this.props.match.path === '/' ? 1 : +this.props.match.params.id,
    };

    handleChangePage = page => {
        this.setState({ currPage: page });
        this.props.history.push(`/${page}`);
    };

    componentDidMount = () => {
        this.props.fetchPosts('https://jsonplaceholder.typicode.com/posts');
    };

    render() {
        const { store, getLimit } = this.props;
        const { currPage } = this.state;
        return (
            <Posts
                handleChangePage={this.handleChangePage}
                getLimit={getLimit}
                store={store}
                currPage={currPage}
            />
        );
    }
}

const mapStateToProps = store => {
    return { store: store };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: url => dispatch(fetchPosts(url)),
        getLimit: limit => dispatch(setLimit(limit)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Content);
