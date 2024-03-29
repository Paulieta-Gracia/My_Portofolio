import DrawerInitiator from './drawer-initiator';
import Routes from './routes/routes';
import UrlParser from './routes/url-parser';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('#skipContent');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#app-content').focus();
    });
  }
}

export default App;
