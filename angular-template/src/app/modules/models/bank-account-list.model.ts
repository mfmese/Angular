import { BankAccount } from "./bank-account.model";
import { ModalPopupBase } from "./modal-popup-base.model";

export class BankAccountList extends ModalPopupBase{
    bankAccounts:BankAccount[];
    customerId: number;
}