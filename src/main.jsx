import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './routes/error-page.jsx'
import Apropos from './routes/Apropos.jsx'
import Accueil from './routes/Accueil.jsx'
import Logements from './routes/Logements.jsx'
import { getLogements } from './data/logements.jsx'

const logements = await getLogements();
let routesLogements = []
for (const logement of logements) {
  routesLogements.push(
    {
      path: `/logements/${logement.id}`,
      element: <Logements key={logement.id} logement={logement} />,
    },
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
  },
  ...routesLogements,
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
