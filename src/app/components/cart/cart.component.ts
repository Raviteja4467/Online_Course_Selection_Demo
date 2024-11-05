import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(private _courseService:CoursesService,private _commonServive:CommonServiceService, private _router:Router){}

  //-----------------------------------------------------------------//

  // ids
  // filterList
  // list=[]
  // ngOnInit(){
  //   this._courseService.currentData.subscribe(list=>{
  //     this.ids=list
  //   })
  //  this.list= this._courseService.products
  //  console.log(this.ids);
  //  console.log(this.list);
  //  this.filterList = this.list.filter(x => this.ids.includes(x.id));
  //  console.log(this.filterList);
  // }

  //-----------------------------------------------------------------------//


  ngOnInit(){
    this.cartDetails()
    this.loadCart()
    this.cartUser()
  }

  getCartDetails:any=[]
  cartDetails(){
    if(localStorage.getItem('localCart'))
    {
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
      console.log(this.getCartDetails)
    }
  }

  total:number=0
  loadCart(){
    if(localStorage.getItem('localCart'))
      {
        this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
        this.total=this.getCartDetails.reduce(function(acc, val){
          const itemPrice = parseFloat(val.newprice)
          return acc+itemPrice
        }, 0)
      }
  }

  delete(course){
    if(localStorage.getItem('localCart'))
    {
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart'))
      for(let i=0;i<this.getCartDetails.length;i++)
      {
        if(this.getCartDetails[i].id === course)
        {
          this.getCartDetails.splice(i,1)
          localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
          this.loadCart()
        }
      }
    }
  }


  //login
  getUser:any=[]
  cartUser(){
    if(localStorage.getItem('login'))
    {
      this.getUser=JSON.parse(localStorage.getItem('login'))
      console.log(this.getUser)
    }
  }

   //logout
   logout(){
    localStorage.removeItem('login')
    localStorage.removeItem('localCart')
    this._router.navigateByUrl('/login')
}
 
}

