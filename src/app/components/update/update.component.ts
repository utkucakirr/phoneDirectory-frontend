import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  persons:Person[]=[];
  dataLoaded=false;
  currentPerson:Person;
  personUpdateForm:FormGroup;
  id:number;

  constructor(private formBuilder:FormBuilder, private personService:PersonService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getPersons();
    this.createPersonUpdateForm();
  }

  getPersons(){
    this.personService.getPersons().subscribe(response=>{
      this.persons=response.data;
      this.dataLoaded=true;
    })
  }

  createPersonUpdateForm(){
    this.personUpdateForm=this.formBuilder.group({
      //personId:[this.getCurrentPersonId(),Validators.required],
      personName:["",Validators.required],
      personSurname:["",Validators.required],
      number:["",Validators.required]
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

  getCurrentPersonId(){
    if(this.currentPerson==null){
      return;
    }else{
      return this.currentPerson.personId;
    }
  }

  getCurrentPersonName(){
    if(this.currentPerson==null){
      return;
    }else{
      return this.currentPerson.personName;
    }
  }

  getCurrentPersonSurname(){
    if(this.currentPerson==null){
      return;
    }else{
      return this.currentPerson.personSurname;
    }
  }

  getCurrentPersonNumber(){
    if(this.currentPerson==null){
      return;
    }else{
      return this.currentPerson.number;
    }
  }

  update(){
    if(this.personUpdateForm.valid){
      this.id=this.currentPerson.personId;
      //console.log(this.id);
      let personModel=Object.assign({},this.personUpdateForm.value)
      this.personService.update(personModel,this.id).subscribe(data=>{
        if(data.success){
          this.toastrService.success(data.message,"Success!")
          this.getPersons();
        }else{
          this.toastrService.error(data.message,"Failed!")
        }
      })
    }else{
      this.toastrService.error("Please fill in all required fields.","Failed");
    }
    //let personModel=Object.assign({},this.personUpdateForm.value)
    //console.log(personModel)
  }

}
