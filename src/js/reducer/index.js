const initialState = {
    token:'5ca0f73c537c994eba9626e3'
};

const reduser = (state = initialState , action) => {
    switch (action.type) {
        case 'addToken' :
            return { ...state, token: action.payload };

        default:
            return state;
    }
};

export default reduser;