import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }


  cif= localStorage.getItem('cif')
  customers = new Customer();
  

  ngOnInit() {
    this.getProfile();
  }

  async getProfile(){
    if(this.cif == undefined){
      this.cif = localStorage.getItem(this.cif);
    }
    const response = await this.service.profile(this.cif).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage)
    } else{
      console.log("ini cusssss")
      console.log(response.data)
      this.customers = response.data;
    }
  }


}
