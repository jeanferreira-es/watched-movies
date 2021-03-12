import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    background-color: #888;
    border-radius: 10px;
    flex-direction: row;
    width: 300px;
    height: 160px;
    margin-right: 25px;
    elevation: 4;
    margin: 7px;
`;

export const Box = styled.View`

    ${props => props.capa && css`
        width: 100px;
        background-color: #7632;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    `}
    
    ${props => props.details && css`
        padding: 10px;
    `}
`;