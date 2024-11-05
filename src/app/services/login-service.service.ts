import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  url2="http://localhost:8080/signup";
  url3="http://localhost:8080/check/"

  constructor(private _http:HttpClient) {

   }

   public addUser(data): Observable<any>{
    return this._http.post(this.url2,data)
  }

  public checkUser(email:any, password:any):Observable<any>{
    return this._http.get(this.url3 + email +"/"+ password,{responseType:'text'})
  }  
  
}
