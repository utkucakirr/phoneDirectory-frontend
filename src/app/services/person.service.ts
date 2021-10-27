import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonResponseModel } from 'src/models/personResponseModel';
import { Person } from 'src/models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl="https://localhost:44354/api/persons/";
  constructor(private httpClient:HttpClient) { }

  getPersons():Observable<PersonResponseModel>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<PersonResponseModel>(newPath);
  }

  add(person:Person):Observable<PersonResponseModel>{
    let newPath=this.apiUrl+"add"
    return this.httpClient.post<PersonResponseModel>(newPath,person);
  }

  update(person:Person,id:number):Observable<PersonResponseModel>{
    let newPath=this.apiUrl+"update"
    person.personId=id;
    return this.httpClient.post<PersonResponseModel>(newPath,person)
  }

  delete(person:Person){
    let newPath=this.apiUrl+"delete"
    return this.httpClient.post(newPath,person)
  }
}
