import { TransactionType } from './transaction-type';

export class Transaction {
    id : string;
    date : string;
    accDebit : string;
    accCredit : string;
    amount : number;
    transactionTypeDTO : TransactionType;
}
