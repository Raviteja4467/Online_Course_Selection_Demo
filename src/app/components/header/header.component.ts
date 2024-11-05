import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _courseService:CoursesService,private _commonService:CommonServiceService, private _router:Router){}
}
