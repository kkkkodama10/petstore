import { PetsShardService, Pet } from './../shared/pets-shared.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pets-detail',
  templateUrl: './pets-detail.component.html',
  styleUrls: ['./pets-detail.component.scss']
})
export class PetsDetailComponent {

  pet : any;
  newPet : any;

  newPetName? : string;
  newPetComment? : string;

  constructor(
    private route: ActivatedRoute,
    private petsShardService:PetsShardService,
    ){

  }
  ngOnInit(){
    this.getPet();
  }
  getPet(): void{
    this.route.paramMap.subscribe(params => {
      const petsObservable = this.petsShardService.showPetById(params.get('petsId')!)
      petsObservable.subscribe(
        (data) => {
          this.pet = data[0]
        },
        (err) => {console.log('ERROR : '+ err)},
      )
    })
  }

  deletePet(): void{
    this.route.paramMap.subscribe(params => {
      const petsObservable = this.petsShardService.deletePetById(params.get('petsId')!)
      petsObservable.subscribe(
        (data) => {
          this.pet = data[0]
        },
        (err) => {console.log('ERROR : '+ err)},
      )
    })
  }

  editPet(): void{
    const paramBody : Pet = {
      id: this.pet.id,
      name: this.pet.name,
      comment: this.pet.comment,
      timestamp: this.pet.timestamp
    }
    this.route.paramMap.subscribe(params => {
      const petsObservable = this.petsShardService.updatePetById(paramBody)
      petsObservable.subscribe(
        (data) => {
          this.pet = data[0]
        },
        (err) => {console.log('ERROR : '+ err)},
      )
    })
  }

}
