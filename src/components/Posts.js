import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'react-emotion';
import Pagination from './Pagination';
import Options from './Options';

class Posts extends Component {
    posts = (arr, page, limit) => {
        let posts = [];
        let i = +page * limit - limit;
        let length = arr.length >= +page * limit ? +page * limit : arr.length;
        for (i; i <= length - 1; i += 1) {
            posts.push(
                <Card key={arr[i].id}>
                    <Name>{`${arr[i].id}. ${arr[i].title}`}</Name>
                    <Body>{arr[i].body}</Body>
                </Card>,
            );
        }
        return posts;
    };
    render() {
        const { handleChangePage, store, currPage, getLimit } = this.props;
        return (
            <Wrapper>
                <Options
                    handleChangePage={handleChangePage}
                    limit={store.page.limit}
                    getLimit={getLimit}
                />
                <Container>
                    {store.data.posts.length > 0 &&
                        this.posts(
                            store.data.posts,
                            currPage,
                            store.page.limit,
                        )}
                </Container>
                <Pagination
                    currPage={currPage}
                    handleChangePage={handleChangePage}
                    posts={store.data.posts}
                    page={store.page}
                />
            </Wrapper>
        );
    }
}

const Wrapper = styled('div')`
    padding: 20px 0;
`;

const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 20px;
`;

const Card = styled('div')`
    width: 31%;
    text-align: center;
    border: solid 1px #eeeeee;
    display: flex;
    flex-direction: column;
    margin: 0px 5px 5px;
`;

const Name = styled('span')`
    width: 100%;
    line-height: 30px;
    border-bottom: solid 1px #eeeeee;
    color: lightgreen;
    text-align: left;
    padding: 5px;
`;
const Body = styled('p')`
    color: hotpink;
    font-size: 11px;
    text-align: left;
    padding: 5px;
`;

export default withRouter(Posts);
