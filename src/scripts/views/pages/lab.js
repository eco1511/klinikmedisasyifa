const Pelayanan = {
  async render() {
    return `
              <div class="pelayanan">
                <h2>Laboratorium</h2>
              </div>
              <div class="list__pelayanan">
                <ul>
                  <li>Test swab antigen</li>
                  <li>Periksa Gula</li>
                  <li>Periksa asam urat</li>
                  <li>Periksa chollesterol</li>
                </ul>
              </div>
            `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Pelayanan;
