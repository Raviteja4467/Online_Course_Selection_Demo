import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private _courseService:CoursesService,private _commonService:CommonServiceService, private _router:Router){
      this._courseService.cartSubject.subscribe((data)=>{
        this.count=data
    })
  }

//------Using manual insertion---------------------//

 list=[]
  products=this._courseService.products
  count=0
  off:any=[]

  ngOnInit(){
    this.passCourses()
    this. cartUser()

  }

  passCourses(){
    
    //--------  to push details   --------------------------//
    // this._courseService.changeData(this.list)
    // this._router.navigateByUrl("/cart")
    //-----------------------------------------------------//

    if(localStorage.getItem('localCart')!=null)
    {
      var cartcount=JSON.parse(localStorage.getItem('localCart'))
      this.count=cartcount.length
    }
  }


  cartNumber:number=0;
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart'))
    this.cartNumber=cartValue.length
    this._courseService.cartSubject.next(this.cartNumber)
  }

  itemCart:any=[]

  triggers(category){
    //-------- Once click add cart then disable----------//

    // console.log(category.id)
    // this.off[category.id]=this.itemCart[category.id]
    // this.list.push(category.id)
    // ++this.count;

    //--------------------------------------------------//

    // localstorage

    let cartDataNull=localStorage.getItem('localCart')
    
    if(cartDataNull==null)
    {
      let storeDataGet:any=[]
      storeDataGet.push(category)
      localStorage.setItem('localCart',JSON.stringify(storeDataGet))
    }
    else
    {
        var id=category.id
        let index:number=-1
        this.itemCart=JSON.parse(localStorage.getItem('localCart'))
        for(let i=0;i<this.itemCart.length;i++)
        {
          if(parseInt(id)===parseInt(this.itemCart[i].id))
          {

            index=i
            break
          }
        }
        if(index==-1)
        {
          //this.off[category.id]=this.itemCart
          this.itemCart.push(category)
          localStorage.setItem('localCart',JSON.stringify(this.itemCart))
        }
        else
        {
          localStorage.setItem('localCart',JSON.stringify(this.itemCart))
        }
    }
    this.cartNumberFunc()
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


//-------------------------------------------------//
//----------------Using API-----------------------//



// //select
// ids;
// ngOnInit(){
//   this.getUserData();
// }

// private getUserData() {
//   this._commonService.getUserCourse().subscribe(
//     (res) => {
//       console.log(res);
//       this.ids = res;
//     }
//   );
// }

// list=[]
// count=0
// off=[]

// passCourses(){
//     this._commonService.changeData(this.list)
//     this._router.navigateByUrl("/cart")
//   }

//   triggers(id){
//     console.log(id)
//     this.off[id]=id;
//     this.list.push(id)
//     ++this.count;

//     localStorage.setItem('localCart',JSON.stringify(id))  //localstorage

//   }


//--------------------------------------------------------//

}
