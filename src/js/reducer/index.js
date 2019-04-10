const initialState = {
    token:''
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