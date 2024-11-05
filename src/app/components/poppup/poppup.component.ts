import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poppup',
  templateUrl: './poppup.component.html',
  styleUrls: ['./poppup.component.css']
})
export class PoppupComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const modalTrigger = document.getElementById('triggerModal');
    if (modalTrigger) {
      modalTrigger.click(); 
    }
  }
}