import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'react-emotion';

class Pagination extends Component {
    pagination = count => {
        let paginationList = [];
        for (let i = 1; i <= count; i += 1) {
            paginationList.push(
                <Page
                    active={this.props.currPage === i ? 'true' : 'false'}
                    key={i}
                    onClick={() => {
                        this.props.handleChangePage(i);
                    }}>
                    {i}
                </Page>,
            );
        }
        return paginationList;
    };
    render() {
        const { posts, page } = this.props;
        const counter = Math.ceil(posts.length / page.limit);
        return <Container>{this.pagination(counter)}</Container>;
    }
}

const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`;

const Page = styled('div')`
    background-color: ${props => props.active === 'true' && 'hotpink'};
    display: flex;
    padding: 5px;
    font-size: 12px;
    color: blue;
    margin: 0px 5px;
    border: solid 1px #e1e1e1;
`;

export default withRouter(Pagination);
