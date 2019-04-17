const  validator = {
    validValue: {
        text_preview_valid: false,
        sum_valid: false,
        full_name_valid: false,
        account_number: false,
        bank: false,
        mfo: false,
        phone: false,
        inn: false
    },
    textPreview : function(e) {
        if(e.target.value.length < 80 || e.target.value.length > 130) {
            validator.validValue.text_preview_valid = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.text_preview_valid = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    sum : function(e) {
        if(+e.target.value <= 0 || e.target.value === '') {
            validator.validValue.sum_valid = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.sum_valid = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    fullName : function(e) {
        if(e.target.value.length < 10 || e.target.value.length > 50) {
            validator.validValue.full_name_valid = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.full_name_valid = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    accountNumber : function(e) {
        if(e.target.value.length < 10) {
            validator.validValue.account_number = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.account_number = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    bank : function(e) {
        if(e.target.value.length < 8) {
            validator.validValue.bank = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.bank = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    mfo : function(e) {
        if(e.target.value.length !== 6) {
            validator.validValue.mfo = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.mfo = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    phone : function(e) {
        if(e.target.value.length < 10) {
            validator.validValue.phone = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.phone = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    inn : function(e) {
        if(e.target.value.length !== 10) {
            validator.validValue.inn = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.inn = true;
            e.target.parentNode.classList.remove('label-error');
        }
    }
};

export default validator;