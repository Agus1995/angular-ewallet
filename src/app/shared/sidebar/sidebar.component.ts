import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
 
  profileClick(){
    this.router.navigate(['/customer/profile']);
  }

  accountClick(){ 
    this.router.navigate(['/account']);
  }

  walletClick(){
    console.log('klikkkkkkkkkkkkkkk');
    this.router.navigate(['/wallet']);
  }

  topUpClick(){
    this.router.navigate(['/transaction/topup']);
  }

  transferClick(){
    this.router.navigate(['/transaction/transfer']);
  }

  buyClick(){
    this.router.navigate(['/forex/buy']);
  }

  sellClick(){
    this.router.navigate(['/forex/sell']);
  }

  chartsClick(){
    this.router.navigate(['/forex/chart']);
  }
}
