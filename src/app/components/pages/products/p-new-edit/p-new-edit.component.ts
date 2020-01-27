import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-p-new-edit',
  templateUrl: './p-new-edit.component.html',
  styleUrls: ['./p-new-edit.component.scss']
})
export class PNewEditComponent implements OnInit {

  forma: FormGroup;

  constructor(public main: MainService) {
    this.forma = new FormGroup({
      productName: new FormControl(this.main.selectedProduct.productName, Validators.required),
      description: new FormControl(this.main.selectedProduct.description, Validators.required),
      stock: new FormControl(this.main.selectedProduct.stock, Validators.required)
    });
  }

  ngOnInit() {
  }

  cancel() {
    this.main.page = 'p-list';
  }

  onSubmit() { // TODO: validate changes in JSON file
    console.log(this.forma.value);
  }

}
