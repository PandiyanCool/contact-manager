import { WebAPI } from './web-api';

export class ContactList {
  static inject() { return [WebAPI]; }

  constructor(api) {
    this.api = api;
    this.contacts = [];
  }

  created() {
    this.api.getContractList().then(contracts => this.contacts = contracts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
