import { Component, OnInit } from '@angular/core';
import { KursService } from 'src/app/service/kurs.service';
import { Kurs } from 'src/app/model/kurs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})
export class KursComponent implements OnInit {

  constructor(private service: KursService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formKurs = this.fb.group({
      sell: ['', Validators.required],
      buy: ['', Validators.required],
      ccy: ['', Validators.required]
    })
  }
  crnDate = new Date();
  formKurs:FormGroup;
  kurs : Kurs = new Kurs();

  getCcy(ccy){
    console.log(ccy);
  }

  async addKurs(){
    this.kurs.ccy1 = "IDR";
    this.kurs.ccy2 = "USD";
    this.kurs.buy = this.formKurs.controls.buy.value;
    this.kurs.sell = this.formKurs.controls.sell.value;
    const response = await this.service.addKurs(this.kurs).toPromise();
    if(response.responsecode != 1){
      alert(response.responsemessage);
    }else{
      alert("success");
    }
  }
}
