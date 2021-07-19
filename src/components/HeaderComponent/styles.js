import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
`;

export const SearchBox = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`

export const Input = styled.TextInput.attrs(props => ({
    selectionColor: '#D1C4E9',
  }))`
    flex: 1;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    height: 38px;
    /* padding-left: 15px; */
    /* elevation: 5; */
`