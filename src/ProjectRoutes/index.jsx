import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router';

import App from '../components/App/App'
import Home from '../views/Home'
import Welcome from '../views/Welcome'
import Profile from '../views/Profile'
import ErrorPage from '../views/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} errorElement={<ErrorPage />}>
        <Route index element={<Navigate to="/welcome" />} />
        <Route path='/home' element={<Home />}  />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
  </>
  )
)

function ProjectRoutes() {
  return (
    <RouterProvider router={router}/>
  )
}

export default ProjectRoutes