import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private _commonServices:CommonServiceService,private _formBuilder: FormBuilder,
    private _router:Router
  ) {

  }
  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
  registrationForm = this._formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(2)]],
    email: ['',[Validators.required,Validators.pattern(this.pattern)]],
    mobileno: ['',[Validators.required,Validators.maxLength(10)]],
    age: ['',[Validators.required]],
    id: ['',[Validators.required]]
  });

  //insert
  postData(){
    console.log(this.registrationForm.value)
    this._commonServices.addUser(this.registrationForm.value).subscribe(
      (res)=>{
        console.log(res);
        //this.ngOnInit() //to lode the page automatically
        this.getUserData();
        alert("User Added ")
      }
    )
  }

  //select
  ids;
  ngOnInit(){
    this.getUserData();
  }

  private getUserData() {
    this._commonServices.getUser().subscribe(
      (res) => {
        console.log(res);
        this.ids = res;
      }
    );
  }

  //delete
  deleteUser(id:any){
    this._commonServices.deleteUser(id).subscribe(
      (res)=>{
        alert("User Deleted")
        this.ngOnInit() //to lode the page automatically
      }
    )
  }

  
get username(){
  return this.registrationForm.get('username')
}

get email(){
  return this.registrationForm.get('email')
}

get mobileno(){
  return this.registrationForm.get('mobileno')
}

get age(){
  return this.registrationForm.get('age')
}

get id(){
  return this.registrationForm.get('id')
}

}

