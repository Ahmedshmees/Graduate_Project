import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Prediction from './pages/Prediction.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Sign from './pages/Sign.jsx'
import Mistral from './pages/Mistral.jsx'
// import { useNavigate } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { 
  createBrowserRouter ,
  RouterProvider,
  Route,
 } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/prediction',
    element: <Prediction/>,
  },
  {
    path: '/services',
    element: <Services/>,
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Sign/>
  },
  {
    path:'/mistral',
    element:<Mistral/>
  },
],
{
  basename: '/SugaPredict'  
}
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GoogleOAuthProvider clientId="901065506309-j4v8i0u0e48ih27mgs7iq0s5d5d9pjdc.apps.googleusercontent.com">
    <RouterProvider router={router}/>
  </GoogleOAuthProvider>
</StrictMode>,
)
