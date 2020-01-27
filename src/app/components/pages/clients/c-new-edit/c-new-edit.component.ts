import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../../../../services/main.service';
import { DataAccesService } from '../../../../services/data-acces.service';
import { Client } from '../../../../models/Client';


@Component({
  selector: 'app-c-new-edit',
  templateUrl: './c-new-edit.component.html',
  styleUrls: ['./c-new-edit.component.scss']
})
export class CNewEditComponent implements OnInit {

  forma: FormGroup;

  constructor(public main: MainService, private data: DataAccesService) { // TODO: add more validators
    this.forma = new FormGroup({
      firstName: new FormControl(this.main.selectedClient.firstName, Validators.required),
      lastName: new FormControl(this.main.selectedClient.lastName, Validators.required),
      city: new FormControl(this.main.selectedClient.city, Validators.required),
      country: new FormControl(this.main.selectedClient.country, Validators.required)
    });
  }

  ngOnInit() {
  }

  cancel() {
    this.main.page = 'c-list';
  }

  setNewId(l: number): string {
    const lastId = this.main.allClients[l - 1].id;
    const tempId = (Number(lastId) + 1).toString();
    const newId = tempId.padStart(4, '0');
    return newId;
  }

  onSubmit() { // TODO: validate changes in JSON file
    if (this.main.page === 'c-new') {
      const tempId = this.setNewId(this.main.allClients.length);
      const tempClient = new Client(this.forma.value.firstName, this.forma.value.lastName,
                                    this.forma.value.city, this.forma.value.country,
                                    tempId);
      this.data.newClient(tempClient).subscribe( resp => {
        console.log(resp);
      });
    }
  }

}
