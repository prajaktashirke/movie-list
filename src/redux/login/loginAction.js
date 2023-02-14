import { USER_LOGIN, USER_REGISTRATION } from "./loginTypes"

export const register = (payload = {}) => {
    return {
        type: USER_REGISTRATION,
        payload
    }
}