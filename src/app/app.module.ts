// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { TicketsComponent } from './components/pages/tickets/tickets.component';
import { CListComponent } from './components/pages/clients/c-list/c-list.component';
import { CNewEditComponent } from './components/pages/clients/c-new-edit/c-new-edit.component';
import { PListComponent } from './components/pages/products/p-list/p-list.component';
import { PNewEditComponent } from './components/pages/products/p-new-edit/p-new-edit.component';

// Modules
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ProductsComponent,
    TicketsComponent,
    CListComponent,
    CNewEditComponent,
    PListComponent,
    PNewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
