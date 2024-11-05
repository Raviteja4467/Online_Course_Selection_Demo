import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  url="http://localhost:8080/";
  private _url1 ="http://localhost:8080/select"
  url2="http://localhost:8080/insert";
  url3="http://localhost:8080/get/";
  url4="http://localhost:8080/update";


  constructor(private _http:HttpClient) { 

  }

  public addUser(data): Observable<any>{
    return this._http.post(this.url2,data)
  }

  public getUser():Observable<any>{
    return this._http.get(this._url1)
  }

  public deleteUser(id:any):Observable<any>{
    return this._http.delete(this.url+"delete/"+id)
  }

  public updateUser(data):Observable<any>{
    return this._http.put(this.url4,data)
  }

  public getUserById(id):Observable<any>{
    return this._http.get(this.url3+id)
  }


  //course

  data=new BehaviorSubject([100,14])
  currentData=this.data.asObservable();

  changeData(list:any){
    this.data.next(list)
  }


  public getUserCourse():Observable<any>{
    return this._http.get(this.url+"course")
  }

  
}
