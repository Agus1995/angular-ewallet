import { Component, OnInit, ElementRef, ViewChild, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewChecked{
  title = 'FinalProject';

  constructor(){}
  id: string;

  home = false;

  ngAfterContentChecked(): void {
    this.id = localStorage.getItem('cif');
  }
  ngAfterViewChecked(): void {
    this.id = localStorage.getItem('cif');
  }
  ngOnInit(): void {
    this.id = localStorage.getItem('cif');
  }
}
