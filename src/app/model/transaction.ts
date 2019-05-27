import { TransactionType } from './transaction-type';

export class Transaction {
    id : string;
    date : Date;
    accDebit : number;
    accCredit : number;
    amount : number;
    transactionType : TransactionType;
}
