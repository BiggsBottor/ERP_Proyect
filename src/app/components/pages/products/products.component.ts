import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private main: MainService) {
    this.main.page = 'p-list';
  }

  ngOnInit() {
    this.getPage();
  }

  getPage(): string {
    return this.main.page;
  }

}
