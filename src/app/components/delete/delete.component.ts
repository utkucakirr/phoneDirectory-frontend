import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  persons:Person[]=[];
  dataLoaded=false;
  currentPerson:Person;

  constructor(private personService:PersonService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(){
    this.personService.getPersons().subscribe(response=>{
      this.persons=response.data;
      this.dataLoaded=true;
    })
  }

  setPerson(person:Person){
    this.currentPerson=person;
  }

  getCurrentPerson(person:Person){
    if(person==this.currentPerson){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  confirmation(){
    let element=<HTMLInputElement> document.getElementById("flexCheckDefault");
    if(element.checked){
      return true;
    }else{
      return false;
    }
  }

  delete(){
    if(this.currentPerson!=null){
      if(this.confirmation()){
        this.personService.delete(this.currentPerson).subscribe(data=>{
          this.toastrService.success("Person deleted!")
          this.getPersons();
        })
      }else{
        this.toastrService.error("You have to check the checkbox!")
      }
      
    }else{
      this.toastrService.error("Select a person and try again.");
    }
  }

}
