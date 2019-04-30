const  validator = {
    validValue: {
        text_preview_valid: false,
        sum_valid: false,
        full_name_valid: false,
        for_whom_name_valid: true,
        account_number: false,
        bank: false,
        mfo: false,
        phone: false,
        inn: false,
        city: false,
        address: false,
        birthday: false,
        file: true,
        checkbox_valid: false
    },

    allErrors : function () {
        validator.birthday();
        validator.address();
        validator.city();
        validator.forWhomName();
        validator.inn();
        validator.fullName();
        validator.phone();
        validator.mfo();
        validator.bank();
        validator.accountNumber();
        validator.sum();
        validator.textPreview();
        validator.file();
        validator.checkbox();
    },

    allValidFunc : function () {
        validator.allErrors();
        return Object.values(validator.validValue).every(item => item === true)
    },

    checkbox: function() {
        let elem = document.getElementById('agree-checkbox');
        if (elem.getAttribute('data-check') === 'true') {
            validator.validValue.checkbox_valid = true;
            elem.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.checkbox_valid = false;
            elem.parentNode.classList.add('label-error');
        }
    },

    textPreview : function() {
        let elem = document.getElementById('text_preview');
        if(elem.value.length < 80 || elem.value.length > 130) {
            validator.validValue.text_preview_valid = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.text_preview_valid = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    sum : function() {
        let elem = document.getElementById('sum');
        if(+elem.value <= 0 || elem.value === '') {
            validator.validValue.sum_valid = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.sum_valid = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    fullName : function() {
        let elem = document.getElementById('full_name');
        if(elem.value.length < 10 || elem.value.length > 50) {
            validator.validValue.full_name_valid = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.full_name_valid = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    accountNumber : function() {
        let elem = document.getElementById('account_number');
        if(elem.value.length < 10) {
            validator.validValue.account_number = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.account_number = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    bank : function() {
        let elem = document.getElementById('bank');
        if(elem.value.length < 8) {
            validator.validValue.bank = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.bank = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    mfo : function() {
        let elem = document.getElementById('mfo');
        if(elem.value.length !== 6) {
            validator.validValue.mfo = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.mfo = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    phone : function() {
        let elem = document.getElementById('phone');
        if(elem.value.length < 10) {
            validator.validValue.phone = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.phone = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    inn : function() {
        let elem = document.getElementById('inn');
        if(elem.value.length !== 10) {
            validator.validValue.inn = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.inn = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    forWhomName : function() {
        let elem = document.getElementById('for_whom_name');
        if(elem) {
            if(elem.value.length < 10 || elem.value.length > 50) {
                validator.validValue.for_whom_name_valid = false;
                elem.parentNode.classList.add('label-error');
            } else {
                validator.validValue.for_whom_name_valid = true;
                elem.classList.remove('label-error');
            }
        }
    },

    city : function() {
        let elem = document.getElementById('city');
        if(elem.value.length < 2 || elem.value.length > 50) {
            validator.validValue.city = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.city = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    address : function() {
        let elem = document.getElementById('address');
        if(elem.value.length < 10 || elem.value.length > 50) {
            validator.validValue.address = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.address = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    birthday : function() {
        let elem = document.getElementById('birthday');
        let userDate = elem.value.substring(0,4);
        let nextYear = Number(new Date().getFullYear());
        if(userDate < 1900 || userDate > nextYear) {
            validator.validValue.birthday = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.birthday = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    file : function () {
        let elems = document.getElementsByClassName('label-file');
        let flag = true;
        Array.prototype.forEach.call(elems, function (elem) {
            if(!elem.querySelector('img')) {
                elem.classList.add('label-error');
                flag = false
            }
        });
        validator.validValue.file = flag;
    }

};

export default validator;