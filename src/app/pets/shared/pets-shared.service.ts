import { Observable } from 'rxjs';
import { pets } from './../pets-list/pets';
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

export interface Pet { 
    id?: string;
    name?: string;
    comment?: string;
    timestamp?: string;
}


@Injectable()
export class PetsShardService {

    constructor(
        private http : HttpClient
    ){}

    listPets(): Observable<any>{
        return this.http.get('/api/v1/pets')
    }
    insertPet(petBody:Pet): Observable<any>{
        return this.http.post('/api/v1/pets/', petBody)
    }
    showPetById(petId: string): Observable<any>{
        return this.http.get('/api/v1/pets/' + petId)
    }
    deletePetById(petId: string): Observable<any>{
        return this.http.delete('/api/v1/pets/' + petId)
    }
    updatePetById(petBody:Pet): Observable<any>{
        return this.http.put('/api/v1/pets/' + petBody.id, petBody)
    }
}