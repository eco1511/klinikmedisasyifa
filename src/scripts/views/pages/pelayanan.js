const Pelayanan = {
  async render() {
    return `
              <div class="pelayanan">
                <h2>Pelayanan</h2>
              </div>
              <div class="list__pelayanan">
                <ul>
                  <li>Pengobatan anak - dewasa - umum</li>
                  <li>Pelayanan suntik KB
                  <li>Pharmacy</li>
                  <li>Sunat/circumsisi</li>
                  <li>Operasi kecil</li>
                  <li>Home visite</li>
                  <li>Pelayanan ambulance dalam negeri dan luar negeri</li>
                  <li>Pelayanan pengiriman jenazah dalam dan luar negeri</li>
                  <li>Pelayanan kebidanan</li>
                  <li>Pelayanan tindik bayi</li>
                  <li>Tesk kehamilan</li>
                <ul>
              </div>
            `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Pelayanan;
