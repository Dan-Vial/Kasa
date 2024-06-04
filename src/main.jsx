import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import ErrorPage_c from '@controller/error-page.c.jsx'
import Apropos_c from '@controller/Apropos.c.jsx'
import Accueil_c from '@controller/Accueil.c.jsx'
import Logements_c from '@controller/Logements.c.jsx'
import { getLogements } from '@model/logements.jsx'

const logements = await getLogements()
let routesLogements = []
for (const logement of logements) {
  routesLogements.push(
    {
      path: `/logements/${logement.id}`,
      element: <Logements_c key={logement.id} logement={logement} />,
    },
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil_c />,
    errorElement: <ErrorPage_c />,
  },
  {
    path: '/apropos',
    element: <Apropos_c />,
  },
  ...routesLogements,
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
