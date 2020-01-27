import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../models/Client';

// const CLIENT_URL = 'https://my-json-server.typicode.com/BiggsBottor/data_ERP/clients'; // FIXME: if is server up fulltime, the pc crush
// const PRODUCTS_URL = 'https://my-json-server.typicode.com/BiggsBottor/data_ERP/Products';
const CLIENT_URL = '../assets/data/clients.json';
const PRODUCTS_URL = '../assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class DataAccesService {

  constructor(private http: HttpClient) { }

  getClientsJSON() {
    return this.http.get(CLIENT_URL);
  }

  getProductsJSON() {
    return this.http.get(PRODUCTS_URL);
  }

  newClient(cli: Client) {
    console.log('new is procesing...');
    return this.http.post(CLIENT_URL, cli).pipe(map( (resp: any) => {
      console.log(resp);
    }));
  }

}
