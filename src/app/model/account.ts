import { Kurs } from './kurs';
import { Customer } from './customer';

export class Account {
    accountNumber: string;
    name: string;
    balance: number;
    curencyType: string;
    createdAt: string;
    updatedAt: string;
    customer: Customer;

    constructor(
        accountNumber: string,
        name: string,
        balance: number,
        curencyType: string,
        createdAt: string,
        updatedAt: string,
        customer: Customer
    ) { this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
        this.curencyType = curencyType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customer = customer;
    }

}
