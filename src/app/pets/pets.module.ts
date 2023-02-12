import { InsertPetComponent } from './insert-pet/insert-pet.component';
import { PetsShardService } from './shared/pets-shared.service';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';



const routes: Routes = [
  {
    path:'pets', component: PetsComponent,
    children: [
        {path: '', component: PetsListComponent }, 
        {path: ':petsId', component: PetsDetailComponent }
    ]
  }

  ];

@NgModule({
  declarations: [
    PetsDetailComponent,
    PetsListComponent,
    InsertPetComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [
    PetsShardService
  ],
  bootstrap: []
})
export class PetsModule { }