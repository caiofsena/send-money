import { getUserHub } from '../../lib/api/ApiUser';
import { LOAD_USER_HUB, LIST_CONTACTS } from "../constants/action-types";

const initialState = {
    userHub: {},
    contacts: []
};

function rootReducer(state = initialState, action) {
if (action.type === LOAD_USER_HUB) {
    state.userHub = await getUserHub();
}
if (action.type === LIST_CONTACTS) {
    
}

    return state;
}

export default rootReducer;