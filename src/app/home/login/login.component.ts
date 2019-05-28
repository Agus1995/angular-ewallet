import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formLogin : FormGroup;
cus: Customer=new Customer();


  constructor(private service: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
  }

async login(){
  console.log('masukkk');
  this.cus.username = this.formLogin.controls.username.value; 
  this.cus.password = this.formLogin.controls.password.value;
  await this.service.login(this.cus).toPromise();
  console.log(this.cus.username);
}


  
}
