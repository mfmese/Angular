import { BankAccount } from "./bank-account.model";
import { ModalPopupBase } from "./modal-popup-base.model";

export class BankAccountEdit extends ModalPopupBase{

    bankAccount:BankAccount;

    constructor() {
        super();
        this.bankAccount = new BankAccount();
    }
    
}