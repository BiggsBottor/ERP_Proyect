import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private main: MainService) {
    this.main.page = 'c-list';
  }

  ngOnInit() {
    this.getPage();
  }

  getPage(): string {
    return this.main.page;
  }

}
