import React, {Component} from 'react';
import styled from 'styled-components';

const TermLabel = styled.span `
    font-weight: bold;
`

const RandomBlock = styled.div `
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock className="rounded">
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <TermLabel>Gender </TermLabel>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermLabel>Born </TermLabel>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermLabel>Died </TermLabel>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermLabel>Culture </TermLabel>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
