import DataSourceRestaurant from '../../data/datasource';
import { createInfoItemTemplate } from '../templates/template-creator';

const Info = {
  async render() {
    return `
            <div class="content">
                <h2 class="content__heading">Informasi</h2>
                <div id="info" class="info"></div>
            </div>
        `;
  },

  async afterRender() {
    const infoKlinik = await DataSourceRestaurant.Info();
    const infoContainer = document.querySelector('#info');
    infoContainer.innerHTML = '';
    infoKlinik.forEach((infos) => {
      infoContainer.innerHTML += createInfoItemTemplate(infos);
    });
  },
};

export default Info;
