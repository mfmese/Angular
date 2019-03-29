import { KeyValue } from "src/app/core/models/key-value";
import { BaseModel } from "./base.model";

export class BankAccount extends BaseModel{
    id: number;
    customerName: string;
    accountName: string;
    bankName: string;
    bankBranch: string;
    accountNumber: string;
    ibanNumber: string;
  }
