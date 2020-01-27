import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../models/Client';
import { DataAccesService } from '../../../../services/data-acces.service';
import { MainService } from '../../../../services/main.service';


@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss']
})
export class CListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private data: DataAccesService, public main: MainService) {
    this.main.page = 'c-list';
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.data.getClientsJSON()
        .subscribe( data => {
          for (const client of (data as any)) {
            this.clients.push(client);
          }
          this.main.allClients = this.clients;
        });
  }


}
