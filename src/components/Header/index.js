import React from 'react';

import { Head, Logo } from './styles';
import { Clear, Container } from '../../global-styles'

const Header = () => (
    <Head>
        <Container>
            <div><Logo orientation="left" bg="#a52"/></div>
            <div><Logo orientation="right" bg="#9d3"/></div>
            <Clear />
        </Container>
    </Head>
);

export default Header;
