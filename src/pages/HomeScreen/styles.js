import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    /* flex: 1; */
    width: 100%;
    height: 100%;
    padding-top: 70px;
`;

export const Box = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${props => props.main && css`
        margin: 10px 40px 0 40px;
    `}
`;