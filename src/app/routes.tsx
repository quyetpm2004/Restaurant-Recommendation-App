import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Results from './pages/Results';
import RestaurantDetail from './pages/RestaurantDetail';

export const router = createBrowserRouter([
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
]);
