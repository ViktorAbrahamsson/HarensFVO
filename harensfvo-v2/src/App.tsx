import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FiskekortRegler from './pages/FiskekortRegler'
import Fiskarter from './pages/Fiskarter'
import Information from './pages/Information'
import Camping from './pages/Camping'

function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Hoppa till innehåll</a>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',            element: <Home /> },
      { path: '/fiskekort',   element: <FiskekortRegler /> },
      { path: '/fiskarter',   element: <Fiskarter /> },
      { path: '/information', element: <Information /> },
      { path: '/camping',     element: <Camping /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
