import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
    
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    ${props => props.round && css`
        width: 30px;
        height: 30px;
        border-radius: 20px;
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
`