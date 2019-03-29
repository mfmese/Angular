import { KeyValue } from "src/app/core/models/key-value";
import { BaseModel } from "./base.model";

export class Address extends BaseModel{
    id: number;
    country: KeyValue;
    state: KeyValue;
    city: KeyValue;
    district: KeyValue;
    address: string;
  }