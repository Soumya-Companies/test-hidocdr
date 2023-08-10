import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import SubPages from '../pages/SubPages'
import NotFound from '../pages/NotFound'

function Routes() {
    return useRoutes([
        {
            path: '/',
            element:<Home />
        },
        {
            path: '/:page',
            element:<SubPages />
        },
        {
            path: "*",
            element:<NotFound />
        }
  ])
}

export default Routes
