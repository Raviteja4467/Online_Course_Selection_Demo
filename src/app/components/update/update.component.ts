import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  uid;
  constructor(private _commonServices:CommonServiceService,private _formBuilder: FormBuilder,
    private _router:Router,private _route:ActivatedRoute
  ) {
    _route.paramMap.subscribe(param=>{
      this.uid=param.get('id')
    })
  }
  ngOnInit(){
    this._commonServices.getUserById(this.uid).subscribe((res)=>{
      this.registrationForm.setValue(
        {
          username:res.username,
          email: res.email,
          mobileno: res.mobileno,
          age: res.age,
          id: res.id
        }
      )
    }
    )
  }
  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
  registrationForm = this._formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(2)]],
    email: ['',[Validators.required,Validators.pattern(this.pattern)]],
    mobileno: ['',[Validators.required,Validators.maxLength(10)]],
    age: ['',[Validators.required]],
    id: ['',[Validators.required]]
  });

  updateUser(){
    console.log(this.registrationForm.value)
    this._commonServices.updateUser(this.registrationForm.value).subscribe(
      (res)=>{
        if(res){
          alert("User Updated")
          this._router.navigateByUrl("/user")
        }
        else
          alert("update failed")
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

