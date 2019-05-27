import { Kurs } from './kurs';
import { Customer } from './customer';

export class Account {
    accNumber: string;
    accName : string;
    balance: number;
    kurs : Kurs;
    customer : Customer;
}
