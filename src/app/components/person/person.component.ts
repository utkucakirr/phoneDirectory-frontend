import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons:Person[]=[];
  dataLoaded=false;

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(){
    this.personService.getPersons().subscribe(response=>{
      this.persons=response.data;
      this.dataLoaded=true;
    })
  }

}
