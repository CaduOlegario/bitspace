import React from 'react'

import { Container, Content } from './styles'

import logo from '../../assets/logo-light.svg'

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <a href="/"><img src={logo} className="logoHeader" alt="Logo" /></a>
            </Content>
        </Container>
    )
}

export default Header