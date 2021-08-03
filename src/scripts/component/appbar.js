import logo from '../../public/logo.png';
import youtube from '../../public/images/youtube_red.png';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <a href="#/">
            <img src="${logo}" alt="logo" width="100px" height="50px">
            </a>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
            <li><a href="#/pelayanan">Pelayanan</a></li>
            <li><a href="#/laboratorium">Laboratorium</a></li>
            <li><a href="#/media">Gallery</a></li>
            <li><a href="#/info">Infromasi</a></li>
            <li><a href="#">Kontak</a></li>
            <li><a href="https://www.youtube.com/channel/UCsFyjYV6_vU_Hvp6nxXbLLg" target='_blank'><img src="${youtube}" width="20px" height="15px"> Youtube</a></li>
            </ul>
        </nav>
    </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
