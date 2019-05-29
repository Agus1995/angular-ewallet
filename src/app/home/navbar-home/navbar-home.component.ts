import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  
  ngOnInit() {
  } 
  homeClick(){
    this.router.navigate(['/home']);
  }
  serviceClick(){
    this.router.navigate(['/service']);
  }
  programsClick(){
    this.router.navigate(['/programs']);
  }
  aboutClick(){
    this.router.navigate(['/about']);
  }
  teamClick(){
    this.router.navigate(['/team']);
  }
  registerClick(){
    this.router.navigate(['/register']);
  }
}
