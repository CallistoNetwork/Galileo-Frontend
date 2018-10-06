import Home from '../containers/Home';
import Notfound from '../containers/NotFound';
import { langs } from '../constants/';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: `/:lang${langs}/`,
    exact: true,
    component: Home,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
