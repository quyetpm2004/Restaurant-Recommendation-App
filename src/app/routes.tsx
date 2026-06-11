import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router'
import Home from './pages/Home'
import Results from './pages/Results'
import RestaurantDetail from './pages/RestaurantDetail'

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/results',
        Component: Results,
      },
      {
        path: '/restaurant/:id',
        Component: RestaurantDetail,
      },
    ],
  },
])
