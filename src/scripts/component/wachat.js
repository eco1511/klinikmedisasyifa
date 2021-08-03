class WaChat extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a class='fixed-whatsapp' href='https://api.whatsapp.com/send?phone=628997006006' rel='nofollow noopener' target='_blank' title='Whatsapp' />
        `;
  }
}

customElements.define('wa-chat', WaChat);
