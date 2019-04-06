import { BaseModel } from "./base.model";
import { KeyValue } from "./key-value";

export class Address extends BaseModel{
    id: number;
    country: KeyValue;
    state: KeyValue;
    city: KeyValue;
    district: KeyValue;
    address: string;
  }