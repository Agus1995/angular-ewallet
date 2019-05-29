import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  id = localStorage.getItem('cif');
  home = false;

  ngOnInit(): void {
    // if (this.id!=null) {
    //   this.home = false;
    // }else{
    //   this.home = true;
    // }
  }

  title = 'FinalProject';
}
