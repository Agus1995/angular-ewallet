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
    this.router.navigate(['/home/service']);
  }
  programsClick(){
    this.router.navigate(['/home/programs']);
  }
  aboutClick(){
    this.router.navigate(['home/about']);
  }
  teamClick(){
    this.router.navigate(['home/team']);
  }
  registerClick(){
    this.router.navigate(['home/register']);
  }
}
