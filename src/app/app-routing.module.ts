import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassvaultListComponent } from './passvault-list/passvault-list.component';  

const routes: Routes = [
  { path: '', redirectTo: 'view-passvault', pathMatch: 'full' },  
  { path: 'view-passvault', component: PassvaultListComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
