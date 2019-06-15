import { TransactionType } from './transaction-type';

export class Transaction {
    id : string;
    date : string;
    accDebet : string;
    accCredit : string;
    amount : number;
    transactionType : TransactionType;
}
