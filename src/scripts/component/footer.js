import instagram from '../../public/images/instagram.png';
import youtube from '../../public/images/youtube.png';
import wa from '../../public/images/wa.png';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer__list">
        <div class="footer__right">
                  
          <img src="${instagram}" alt="instagram" width="40px" height="40px" align="middle">
          <a href="https://www.instagram.com/klinikmedisasyifa/?hl=id" target='_blank'>klinikmedisasyifa </a>
          <br>         
          <img src="${youtube}" alt="youtube" width="40px" height="45px" align="middle">
          <a href="https://www.youtube.com/channel/UCsFyjYV6_vU_Hvp6nxXbLLg" target='_blank'>klinik_medisa_syifa</a>
          <br>
          <img src="${wa}" alt="youtube" width="35px" height="40px" align="middle">
          <a href="">+62 8997 006 006</a>
               
        </div>

        <div class="footer__left">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.178680353571!2d106.88856181467028!3d-6.240166321170365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f33ddd01d29d%3A0x6e5407f514b7cb37!2sKlinik%20Umum%20Medisa%20Syifa!5e0!3m2!1sid!2sid!4v1627704361302!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <p><b>Alamat:</b> Jl. Masjid Almuqorrobin No.4 Rt.09 Rw.03, Cipinang Bali, Cipinang Melayu, Kec. Makassar - Jakata Timur</p>
        <p>Klinik Medisa Syifa - copyright@2021</p>
        </div>
        
  </footer>
        `;
  }
}

customElements.define('footer-bar', Footer);
