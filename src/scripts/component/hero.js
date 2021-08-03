import people from '../../public/images/people.png';

class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="hero">
                <div class="hero__left>
                    <h1 class="hero__title"></h1>
                    <h1 class="hero__title">Klinik Umum</h1>
                    <h1 class="hero__title bold">Medisa Syifa</h1>
                    <p class="hero__tagline satu">"public health and</p>
                    <p class="hero__tagline dua">better life"</p>
                    <br>
                    <a id="button" href="#">Kontak Kami</a>
                 </div>
                <div class="hero__right">
                    <img src="${people}">
                </div>
          </div>
          `;
  }
}

customElements.define('hero-bar', HeroBar);
