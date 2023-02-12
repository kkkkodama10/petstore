import { PetsShardService } from './../shared/pets-shared.service';
import { Component } from '@angular/core';
import { pets } from './../pets-list/pets';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent {

  pets: any 

  constructor(
    private petsShardService : PetsShardService
  ){}

  ngOnInit(){
    const petsObservable = this.petsShardService.listPets()
    petsObservable.subscribe(
      (data) => {
        this.pets = data
        console.log('SUCSESS : '+ data)
      },
      (err) => {console.log('ERROR : '+ err)},
    )
  }

}
