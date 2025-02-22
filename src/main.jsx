import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectRoutes from './ProjectRoutes'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectRoutes />
  </StrictMode>,
)
