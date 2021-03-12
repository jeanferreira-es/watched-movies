import React, { useEffect, useContext } from 'react';
import { Box, Container } from './styles';
import { Text } from '../../styles/general';

import ConfigContext from '../../contexts/config';

export default function index({ movie }) {
    const { theme } = useContext(ConfigContext);

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