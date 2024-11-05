import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _loginservice:LoginServiceService , private  _formBuilder1: FormBuilder , private _router1:Router,
    private _route:ActivatedRoute
  ) { }

  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
  SRegExp = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/";
  registerForm1= this._formBuilder1.group({
    email: ['',[Validators.required,Validators.pattern(this.pattern)]],
    password: ['',[Validators.required, Validators.pattern(this.SRegExp)]],

  });

  alert1:string
  alert2:string
  showSuccessAlert1 :boolean
  showSuccessAlert2 :boolean
  ngOnInit(): void {
    
  }

  postData(){
      this._loginservice.checkUser(this.registerForm1.value.email,this.registerForm1.value.password).subscribe(
        (res)=>{
          if(res==1){
            this.alert1 = 'Login successful!';
            this.showSuccessAlert1 = true; // Show success alert
            if(this.showSuccessAlert1)
                setTimeout(() => {
                 this._router1.navigateByUrl("/course") 
                  localStorage.setItem('login',JSON.stringify(this.registerForm1.value.email)) 
                }, 2000);    
          } 
          else {
            this.showSuccessAlert2 = true;
            if(this.showSuccessAlert2)
              this.alert2 = 'Please fill in all required fields correctly.';
              setTimeout(() => {
                this._router1.navigateByUrl("/signup")  
              }, 2000);
               
          }
        }
      )
  }
  

  get email(){
    return this.registerForm1.get('email')
  }
  get password(){
    return this.registerForm1.get('password')
  }
  


}


  

