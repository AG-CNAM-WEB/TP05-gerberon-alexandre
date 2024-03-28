import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ProfileComponent } from './profile/profile.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CarteFormComponent } from './gestion-cartes/carte-form/carte-form.component';

const routes: Routes = [
  { path: 'form', component: ClientFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '', component: CarteFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
