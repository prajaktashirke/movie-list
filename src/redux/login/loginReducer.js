import { USER_REGISTRATION } from "./loginTypes";

const initialState = {
    email: "",
    password: "",
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_REGISTRATION:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export default loginReducer;