import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FinalProject';

  constructor(){}

  id = localStorage.getItem('cif');
  home = false;

  ngOnInit(): void {
    
  }
  
}
