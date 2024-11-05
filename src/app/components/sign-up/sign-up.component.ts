import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private _loginService:LoginServiceService,private _formBuilder: FormBuilder,
    private _router:Router) {

  }

  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
  SRegExp = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/";
  registerForm2= this._formBuilder.group({
  email: ['',[Validators.required,Validators.pattern(this.pattern)]],
  password: ['',[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
  repeatpassword:['',[Validators.required]],
  });

  
 
  alert1:string
  showSuccessAlert :boolean

  postData(){
    console.log(this. registerForm2.value)
    this._loginService.addUser(this. registerForm2.value).subscribe(
      (res)=>{
        this.alert1 = 'signup successful!';
            this.showSuccessAlert = true; // Show success alert
            if(this.showSuccessAlert = true)
                setTimeout(() => {
                  this._router.navigateByUrl("/login")  
                }, 2000);
      }
    )
  }

  get email(){
    return this.registerForm2.get('email')
  }

  get password(){
    return this.registerForm2.get('password')
  }

  get repeatpassword(){
    return this.registerForm2.get('repeatpassword')
  }

}
