import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SampleComponent } from './components/sample/sample.component';
import { UserComponent } from './components/user/user.component';
import { UpdateComponent } from './components/update/update.component';
import { PoppupComponent } from './components/poppup/poppup.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CartComponent } from './components/cart/cart.component';
import { JavaComponent } from './components/java/java.component';
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignUpComponent,
    SampleComponent,
    UserComponent,
    UpdateComponent,
    PoppupComponent,
    CoursesComponent,
    CartComponent,
    JavaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
