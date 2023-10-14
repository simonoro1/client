import {createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {...state, user: null}
        case 'LOGIN': 
            return {...state, user: action.payload}
        case 'AUTH_IS_READY':
            return {user: action.payload , authIsReady: true}
        default:
            return state
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })


    console.log('AuthContext: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}> 
            {children} 
        </AuthContext.Provider>
    )
}