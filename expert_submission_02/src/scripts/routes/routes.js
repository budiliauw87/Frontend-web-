import Home from '../views/pages/home/home';
import Favorite from '../views/pages/favorite/favorite';
import Detail from '../views/pages/detail/detail';
const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
