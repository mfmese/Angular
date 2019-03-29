import { FormBuilder, Validators, ValidationErrors, FormControl } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { ValidationService } from "src/app/core/validations/validation.service";
import { ValidationComponent } from "src/app/core/validations/validation.component";

@Component({
    selector: 'customer-edit-validation',
    template :`<span *ngIf="errorMessage !== null">{{errorMessage}}</span>`
})
export class CustomerEditValidation {

    @Input('control') control: FormControl;
    
    constructor(private formBuilder: FormBuilder) {}

    get validators(){
        return this.formBuilder.group({
            'name': ['', [Validators.required]],
            'surname': ['', [Validators.required]],
            'age': ['', [Validators.required]],
            'identity': ['', [Validators.required]],
            'phoneNumber': ['', [Validators.required]],
            'email': ['', [Validators.required, Validators.maxLength(255), Validators.minLength(5), ValidationComponent.emailValidator]],
            'title': ['', [Validators.required]],
            'taxno': ['', [Validators.required]],
            'taxbranch': ['', [Validators.required]],
            'insuranceno': ['', [Validators.required]],
            'extrapayment': ['', [Validators.required]],
            'profitmargin': ['', [Validators.required]],
            'salary': ['', [Validators.required]],
            'performance': ['', [Validators.required]],
            'address': ['', [Validators.required]],
            'bankaccount':['', []],
        });
    }

    get errorMessage() {
        let validationService =  new ValidationService(this.control);

        let propertyName = validationService.getPropertyName;
        return propertyName === null ? null : this.getMessages(propertyName, this.control.errors[propertyName]);
    }
    
    getMessages(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required sadfsdfdsfs',
            'invalidEmailAddress': 'Invalid email address',
            'minlength': `Minimum length  ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    // static emailValidator(control: ValidationErrors) {
    //     if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
    //         return { 'invalidEmailAddress': true };

    //     return null;
    // }


}