import { PetsModule } from './pets/pets.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'pets', pathMatch: 'full' }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PetsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
