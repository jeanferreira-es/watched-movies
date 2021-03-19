import styled, { css } from 'styled-components/native';
import metrics from '../../styles/metrics';

export const Container = styled.View`
    /* background-color: #888; */
    border-radius: ${metrics.baseRadius}px;
    flex-direction: row;
    width: 300px;
    height: 160px;
    /* margin-right: 25px; */
    elevation: ${metrics.baseElevation};
    margin: ${metrics.baseMargin}px;
`;

export const Box = styled.View`

    ${props => props.capa && css`
        width: 100px;
        background-color: #7632;
        border-bottom-left-radius: ${metrics.baseRadius}px;
        border-top-left-radius: ${metrics.baseRadius}px;
    `}
    
    ${props => props.details && css`
        padding: 10px;
    `}
`;