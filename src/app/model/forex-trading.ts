import { Customer } from './customer';
import { Kurs } from './kurs';

export class ForexTrading {
    id:number;
    ccy: string;
    description: string;
    rate: number;
    restOfMoney: number;
    amount: number;
    provitLost: number;
    account : string;
    customer : Customer;
}
