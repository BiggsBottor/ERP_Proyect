import { Injectable } from '@angular/core';
import { Client } from '../models/Client';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  page: string;
  selectedClient: Client;
  selectedProduct: Product;
  allClients: Client[] = [];

  constructor() { }

  editClient(flag: string, cli?: Client) {
    this.page = flag;
    if (flag === 'c-edit') {
      this.selectedClient = cli;
    } else {
      this.selectedClient = new Client('', '', '', '');
    }
  }

  editProduct(flag: string, pro?: Product) {
    this.page = flag;
    if (flag === 'p-edit') {
      this.selectedProduct = pro;
    } else {
      this.selectedProduct = new Product('', '', null);
    }
  }

}
