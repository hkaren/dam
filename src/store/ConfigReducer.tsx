
const initialState: any = {
    profileDrawerActive: 1,
    
    bottomHalfModal: false,
    bottomHalfModalData:{},
    createFormModal: false,
    createFormModalData: {},
    filterModal: false,
    filterModalData: {},
    navigationGoBack: false,
    navigationGoBackData: {},
    
    /*showGlobalHeader: true,
    scrollDownUp: '',
    homeScrollEnd: false,
    profileDrawerActive: 1,
    thisPageId: null,*/
};

const configReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case 'SET_CONFIG':
            // Merge the payload into the current state using object spread
            return {
                ...state,
                ...action.payload,
            };
        default:
            // Return the current state if the action type does not match
            return state;
    }
};

export default configReducer;
