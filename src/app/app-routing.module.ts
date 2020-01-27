import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { TicketsComponent } from './components/pages/tickets/tickets.component';


const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
