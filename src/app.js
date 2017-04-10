export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '', modeulId: 'no-selection', title: 'Select' },
      { route: 'contacts/id', modeulId: 'contact-detail', title: 'contancts' }
    ]);
  }
}
