import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    extraSignupFields: [{
        fieldName: "name",
        fieldLabel: "Name",
        inputType: "text",
        visible: true
    }, {
        fieldName: "age",
        fieldLabel: "Age",
        inputType: "number",
        visible: true
    }, {
        fieldName: "animal",
        fieldLabel: "Animal",
        inputType: "text",
        visible: true
    }, {
        fieldName: "sex",
        fieldLabel: "Sex",
        inputType: "select",
        class: "form-control",
        showFieldLabel: true,
        //empty: "Select sex",
        data: [{
            id: 1,
            label: "m",
            value: "m"
        }, {
            id: 2,
            label: "w",
            value: "w"
        }],
        visible: true
    }]
});
