import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  personAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private personService:PersonService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPersonAddForm();
  }

  createPersonAddForm(){
    this.personAddForm=this.formBuilder.group({
      personName:["",Validators.required],
      personSurname:["",Validators.required],
      number:["",Validators.required]
    })
  }

  add(){
    if(this.personAddForm.valid){
      let personModel=Object.assign({},this.personAddForm.value)
      this.personService.add(personModel).subscribe(data=>{
        if(data.success){
          this.toastrService.success(data.message,"Success!")
        }else{
          this.toastrService.error(data.message,"Failed!")
        }
      })
    }
    else{
      this.toastrService.error("Please fill in all required fields.","Failed!");
    }

    //let personModel=Object.assign({},this.personAddForm.value)
    //console.log(personModel)
  }

}
