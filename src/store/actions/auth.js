import * as actionTypes from'./actionTypes'
import axios from 'axios'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        // ...authenticate user
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGX1j8voFq5KwFZ1q3fhD2s0gAni2agu4'
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGX1j8voFq5KwFZ1q3fhD2s0gAni2agu4'
        }
        axios.post(url, authData)
        .then(response => {
            console.log(response.data)
            dispatch(authSuccess(response.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(authFail(err))
        })
    }
}