import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NewTeam from '../pages/CreateTeam'
import Header from '../components/Header'

import { TeamProvider } from '../hooks/TeamContext'

const Routes: React.FC = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <TeamProvider>
                <BrowserRouter>
                    <Route path="/" component={Home} exact />
                    <Route path="/team" component={NewTeam} />
                </BrowserRouter>
            </TeamProvider>
        </div>
    )
}

export default Routes