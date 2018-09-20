import React, { Component } from 'react';
import styled from 'react-emotion';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.limit };
    }
    handleChange = event => {
        const { getLimit } = this.props;
        this.setState({ value: +event.target.value }, () =>
            getLimit(this.state.value),
        );
    };
    render() {
        const { value } = this.state;
        const { handleChangePage } = this.props;
        return (
            <Container>
                <Select
                    value={value}
                    onChange={e => {
                        this.handleChange(e);
                        handleChangePage(1);
                    }}>
                    <Option value="3">3</Option>
                    <Option value="6">6</Option>
                    <Option value="9">9</Option>
                    <Option value="12">12</Option>
                </Select>
            </Container>
        );
    }
}

const Container = styled('div')`
    padding-bottom: 20px;
    margin-left: 5px;
`;

const Select = styled('select')``;

const Option = styled('option')``;

export default Options;
