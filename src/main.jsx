import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from '/src/pages/Homepage'
import ProductPage from '/src/pages/ProductPage'
import ProductDetailPage from '/src/pages/ProductDetailPage'
import SignUp from '/src/pages/SignUp'
import SignIn from '/src/pages/SignIn'
import Cart from '/src/pages/Cart'
import Error from '/src/pages/Error'
// import shop from '/src/pages/Homepage'
// import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />
  },

  {
    path: '/home',
    element: <Homepage />,
  },
  
  {
    path: '/shop',
    element: <ProductPage />
  },

  {
    path: '/product',
    element: <ProductDetailPage />
  },

  {
    path: '/signup',
    element: <SignUp />
  },

  {
    path: '/signin',
    element: <SignIn />
  },

  {
    path: '/cart',
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
