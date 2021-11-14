import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Postjob } from '../Pages/Postjob'

export const Routes = () => {
    return (
        <Switch>
            <Route path = '/' exact>
                <Home />
            </Route>
            <Route path = '/post'>
                <Postjob />
            </Route>
        </Switch>
    )
}
