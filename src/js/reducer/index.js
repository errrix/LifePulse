const initialState = {
    user_id: '',
    user_roles: [],
    user_info: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        user_role: []
    },
    user_cards: [],
    show_popup: false
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'addUserId' :
            return {...state, user_id: action.payload};

        case 'addUserInfo' :
            return {...state, user_info: action.payload};

        case 'addUserCards' :
            return {...state, user_cards: action.payload};

        case 'addUserRole' :
            return {...state, user_roles: action.payload};

        case 'changePopup' :
            return {...state, show_popup: action.payload};

        default:
            return state;
    }
};

export default reduser;