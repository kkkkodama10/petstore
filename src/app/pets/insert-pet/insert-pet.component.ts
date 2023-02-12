import { PetsShardService, Pet } from './../shared/pets-shared.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-insert-pet',
  templateUrl: './insert-pet.component.html',
  styleUrls: ['./insert-pet.component.scss'],
})

export class InsertPetComponent {

  newPetName? : string;
  newPetComment? : string;

  constructor(
    private route: ActivatedRoute,
    private petsShardService:PetsShardService,
  ){}
  ngOnInit(){
  }

  insertPet(){
    const paramBody : Pet = {
      id: 'kjkasfnva',
      name: this.newPetName,
      comment: this.newPetComment,
      timestamp: '2019-03-28T00:00:00.000Z'
    }
    this.route.paramMap.subscribe(params => {
      const petsObservable = this.petsShardService.insertPet(paramBody)
      petsObservable.subscribe(
        (data) => {
          console.log('SUCSESS : '+ data)
        },
        (err) => {console.log('ERROR : '+ err)},
      )
    })
  }
}

