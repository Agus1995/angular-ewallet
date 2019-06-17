import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: AuthService, private fb: FormBuilder, private router: Router) { }
  formRegister: FormGroup;
  cus: Customer= new Customer();

  ngOnInit() {
    this.formRegister = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      nik: ['', Validators.required],
      mothersName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      npwp: ['', Validators.required],
    });
  }

  async register() {
    this.cus.firstName = this.formRegister.controls.firstName.value;
    this.cus.lastName = this.formRegister.controls.lastName.value;
    this.cus.birthDate = this.formRegister.controls.birthDate.value;
    this.cus.nik = this.formRegister.controls.nik.value;
    this.cus.mothersName = this.formRegister.controls.mothersName.value;
    this.cus.address = this.formRegister.controls.address.value;
    this.cus.phone = this.formRegister.controls.phone.value;
    this.cus.username = this.formRegister.controls.username.value;
    this.cus.password = this.formRegister.controls.password.value;
    this.cus.email = this.formRegister.controls.email.value;
    this.cus.npwp = this.formRegister.controls.npwp.value;
    const response = await this.service.register(this.cus).toPromise();
    if (response.responsecode != 1) {
      alert(response.responsemessage);
    } else {
      alert('success')
      this.router.navigate(['/login']);
    }
    await this.service.register(this.cus).toPromise();
  }
}
