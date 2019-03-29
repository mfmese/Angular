import { FormControl } from "@angular/forms";

export class ValidationService{

    constructor(private control: FormControl) { }

    get getPropertyName() : string {
        for (let propertyName in this.control.errors)
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched)
                return propertyName;

        return null;
    }
}