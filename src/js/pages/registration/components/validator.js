const  validator = {
    validValue: {
        first_name_valid: false,
        last_name_valid: false,
        email: false,
        phone: true,
        password: false,
        confirmPassword: false
    },

    firstName : function(e) {
        if(e.target.value.length < 2 || e.target.value.length > 15) {
            validator.validValue.first_name_valid = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.first_name_valid = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    lastName : function(e) {
        if(e.target.value.length < 2 || e.target.value.length > 15) {
            validator.validValue.last_name_valid = false;
            e.target.parentNode.classList.add('label-error');
        } else {
            validator.validValue.last_name_valid = true;
            e.target.parentNode.classList.remove('label-error');
        }
    },

    email : function(e) {
        if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,6}$/.test(e.target.value)) {
            validator.validValue.email = true;
            e.target.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.email = false;
            e.target.parentNode.classList.add('label-error');
        }
    },

    password : function(e) {
        if(/[a-z0-9]{6,12}$/.test(e.target.value)) {
            validator.validValue.password = true;
            e.target.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.password = false;
            e.target.parentNode.classList.add('label-error');
        }
    },

    confirmPassword : function(e) {
        if(validator.validValue.password.value === e.target.value) {
            validator.validValue.confirmPassword = true;
            e.target.parentNode.classList.remove('label-error');
        } else {
            validator.validValue.confirmPassword = false;
            e.target.parentNode.classList.add('label-error');
        }
    }
};

export default validator;