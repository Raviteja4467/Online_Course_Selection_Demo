import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SampleComponent } from './components/sample/sample.component';
import { UserComponent } from './components/user/user.component';
import { UpdateComponent } from './components/update/update.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CartComponent } from './components/cart/cart.component';
import { JavaComponent } from './components/java/java.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:"full"},

  {path:"home",component:HomeComponent},

  {path:"login",component:LoginComponent},

  {path:"signup",component:SignUpComponent},

  {path:"sample",component:SampleComponent},

  {path:"update/:id",component:UpdateComponent},

  {path:"user",component:UserComponent},

  {path:"course",component:CoursesComponent},

  {path:"cart",component:CartComponent},

  //courses list

  {path:"java",component:JavaComponent},

  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
