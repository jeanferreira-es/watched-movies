import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import metrics from '../../styles/metrics';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    border-radius: ${metrics.baseRadius}px;
    flex-direction: row;
    width: ${ width < 500 ? '94%' : '330px'};
    height: 160px;
    elevation: ${metrics.baseElevation};
    margin: ${metrics.baseMargin}px;
`;

export const Box = styled.View`

    ${props => props.capa && css`
        width: 107.5px;
        background-color: #7632;
        border-bottom-left-radius: ${metrics.baseRadius}px;
        border-top-left-radius: ${metrics.baseRadius}px;
    `}
    
    ${props => props.details && css`
        padding: 10px 15px;
        flex: 1;
    `}
`;