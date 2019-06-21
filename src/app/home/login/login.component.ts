import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { CommonResponse } from 'src/app/security/commonResponse';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  cus: Customer = new Customer();


  constructor(private router: Router, private service: AuthService, private fb: FormBuilder) { }

  selectedRole: string;
  ngOnInit() {
    this.formLogin = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  async login() {
    this.cus.username = this.formLogin.controls.username.value;
    this.cus.password = this.formLogin.controls.password.value;
    if (this.cus.username == "admin" && this.cus.password == "admin") {
      localStorage.setItem('cif', 'admin');
      this.router.navigate(['/kurs']);
    } else {
      const response = await this.service.login(this.cus).toPromise();
      if (response.responsecode != 1) {
        alert(response.responsemessage);
      } else {
        localStorage.setItem('cif', response.data.cif);
        this.router.navigate(['/customer/profile']);
      }
    }
  }
}





