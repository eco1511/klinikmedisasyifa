import 'regenerator-runtime';
// styles
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/hero.css';
import '../styles/wachat.css';
import '../styles/pelayanan.css';
import '../styles/media.css';
import '../styles/footer.css';
import '../styles/infoitem.css';
// component
import './component/appbar';
import './component/hero';
import './component/wachat';
import './component/footer';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
