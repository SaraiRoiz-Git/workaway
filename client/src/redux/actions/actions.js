import * as AT from './actionsTypes'

export const onLogin = (active_user) => dispatch => {
    return (dispatch9({
        type: AT.ON_LOGIN,
        payload: active_user
    }))
}

export const onLogOut = () => dispatch => {
    return (dispatch9({
        type: AT.ON_LOGOUT
    }))
}