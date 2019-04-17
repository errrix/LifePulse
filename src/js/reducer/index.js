const initialState = {
    user_id: '',
    user_role: []
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'addUserId' :
            return {...state, user_id: action.payload};

        case 'addUserRole' :
            return {...state, user_role: action.payload};

        default:
            return state;
    }
};

export default reduser;