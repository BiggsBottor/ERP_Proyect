import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/Product';
import { DataAccesService } from '../../../../services/data-acces.service';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.scss']
})
export class PListComponent implements OnInit {

  products: Product [] = [];
  imgName = '';

  constructor(private data: DataAccesService, public main: MainService) {
    this.main.page = 'p-list';
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.data.getProductsJSON()
        .subscribe( data => {
          for (const product of (data as any)) {
            this.products.push(product);
          }
        });
  }

  getImgName(proName: string): string {
    // this.imgName = `assets/img/${proName}.png`;
    this.imgName = `assets/img/no-image.png`;
    return this.imgName;
  }

}
