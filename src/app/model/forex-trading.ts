import { Customer } from './customer';
import { Kurs } from './kurs';

export class ForexTrading {
    customer:Customer;
    date : Date;
    kurs : Kurs;
    buySel : string;
    rate : number;
    restOfMoney : number;
    amount : number;
    profitLost : number;

}
