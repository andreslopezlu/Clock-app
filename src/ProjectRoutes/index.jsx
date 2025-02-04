
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router';
import Home from '../views/Home'
import Welcome from '../views/welcome'
import Profile from '../views/profile'
import ErrorPage from '../views/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/profile" element={<Profile />} />
  </>
  )
)

function ProjectRoutes() {
  return (
    <RouterProvider router={router}/>
  )
}

export default ProjectRoutes