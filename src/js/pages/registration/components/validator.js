const validator = {
    validValue: {
        first_name_valid: false,
        last_name_valid: false,
        email_valid: false,
        password_valid: false,
        phone_valid: true,
        password_confirm_valid: false,
        checkbox_valid: false
    },

    allErrors : function () {
        validator.firstName();
        validator.lastName();
        validator.email();
        validator.password();
        validator.passwordConfirm();
        validator.checkbox();
    },

    allValidFunc : function () {
        validator.allErrors();
        return Object.values(validator.validValue).every(item => item === true)
    },

    firstName: function () {
        let elem = document.getElementById('first_name');
        if (elem.value.length < 2 || elem.value.length > 15) {
            validator.validValue.first_name_valid = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.first_name_valid = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    lastName: function () {
        let elem = document.getElementById('last_name');
        if (elem.value.length < 2 || elem.value.length > 15) {
            validator.validValue.last_name_valid = false;
            elem.parentNode.classList.add('label-error');
        } else {
            validator.validValue.last_name_valid = true;
            elem.parentNode.classList.remove('label-error');
        }
    },

    email: function () {
        let elem = document.getElementById('reg_email');
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,6}$/.test(elem.value)) {
            validator.validValue.email_valid = true;
            elem.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.email_valid = false;
            elem.parentNode.classList.add('label-error');
        }
    },

    password: function () {
        let elem = document.getElementById('reg_password');
        if (/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(elem.value)) {
            validator.validValue.password_valid = true;
            elem.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.password_valid = false;
            elem.parentNode.classList.add('label-error');
        }
    },

    passwordConfirm: function () {
        let pass = document.getElementById('reg_password');
        let passConfirm = document.getElementById('confirm_password');
        if (pass.value === passConfirm.value) {
            validator.validValue.password_confirm_valid = true;
            passConfirm.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.password_confirm_valid = false;
            passConfirm.parentNode.classList.add('label-error');
        }
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
};

export default validator;