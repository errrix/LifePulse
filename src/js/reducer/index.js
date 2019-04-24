const initialState = {
    user_id: '5ca0f73c537c994eba9626e3',
    user_role: [],
    user_cards: []
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'addUserId' :
            return {...state, user_id: action.payload};

        case 'addUserRole' :
            return {...state, user_role: action.payload};

        case 'addUserCards' :
            return {...state, user_cards: action.payload};

        default:
            return state;
    }
};

export default reduser;