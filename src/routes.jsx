import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import ListUsers from './pages/ListUsers'

const router = createBrowserRouter(
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Lista-de-Usuarios',
        element: <ListUsers/>
    }


)

export default router