import Home from '../views/pages/home';
import Media from '../views/pages/media';
import Pelayanan from '../views/pages/pelayanan';
import Info from '../views/pages/info';
import Lab from '../views/pages/lab';

const routes = {
  '/': Home, // default page
  '/pelayanan': Pelayanan,
  '/media': Media,
  '/info': Info,
  '/laboratorium': Lab,

};

export default routes;
