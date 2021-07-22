import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
    text-align: justify;

    ${props => props.bold && css`
        font-weight: bold;
    `}

    ${props => props.small && css`
        font-size: 12px;
    `}

    ${props => props.mTop && css`
        margin-top: 10px;
    `}
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    ${props => props.round && css`
        width: 38px;
        height: 38px;
        border-radius: 20px;
        /* elevation: 5; */
    `}
`;

export const Box = styled.View`

    ${props => props.row && css`
        flex-direction: row;
        align-items: center;
    `}

    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}

    ${props => props.spaceAround && css`
        align-content: space-around;
        justify-content: space-around;
    `}
`