import React from 'react';
import { Box, Container } from './styles';
import { Text } from '../../styles/general';
import { connect } from 'react-redux';

function index({ movie, theme }) {
    return(
        <Container style={{ backgroundColor: theme.cardColor}}>
            <Box capa>

            </Box>
            <Box details>
                <Text style={{ color: theme.textColor }}>{movie.title}</Text>
            </Box>
        </Container>
    )
}

export default connect(state => ({
    theme: state.theme.theme
}))(index);