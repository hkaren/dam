export interface CustomerState {

}

const initialState: CustomerState = {
    cv: []
};

const customerReducer = (state: CustomerState = initialState, action: any): CustomerState => {
    switch (action.type) {
        case 'SET_CUSTOMER':
            return {
                ...state,
                ...action.payload,
            };
        case 'SET_CLEAR_CUSTOMER':
            return {
                ...state,
                ...{cv: null},
            };
        default:
            return state;
    }
};

export default customerReducer;
