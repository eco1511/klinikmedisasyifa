import pic01 from '../../../public/images/01.jpeg';
import pic02 from '../../../public/images/02.jpeg';
import pic03 from '../../../public/images/03.jpeg';
import pic04 from '../../../public/images/04.jpeg';
import pic05 from '../../../public/images/05.jpeg';
import pic06 from '../../../public/images/06.jpeg';
import pic07 from '../../../public/images/07.jpeg';
import pic08 from '../../../public/images/08.jpeg';
import pic09 from '../../../public/images/09.jpeg';

const Media = {
  async render() {
    return `  <div class="media">
                <h2>Gallery</h2>
                <div class="media-item">
                  <div class="card">
                    <img src="${pic01}">
                  </div>
                  <div class="card">
                    <img src="${pic02}">
                  </div>
                  <div class="card">
                    <img src="${pic03}">
                  </div>
                  <div class="card">
                    <img src="${pic04}">
                  </div>
                  <div class="card">
                    <img src="${pic05}">
                  </div>
                  <div class="card">
                    <img src="${pic06}">
                  </div>
                  <div class="card">
                    <img src="${pic07}">
                  </div>
                  <div class="card">
                    <img src="${pic08}">
                  </div>
                  <div class="card">
                    <img src="${pic09}">
                  </div>
                </div>
              <div>
            `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Media;
