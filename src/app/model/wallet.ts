import { Customer } from './customer';

export class Wallet {
    walletId:string;
    walletName:string;
    createdAt:string;
    updatedAt: string;
    customer: Customer;
    
    constructor(
        walletId:string,
        walletName:string,
        createdAt:string,
        updatedAt: string,
        customer: Customer
    ){
        this.walletId = walletId;
        this.walletName = walletName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.customer = customer;
    }
}
