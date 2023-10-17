import {createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {...state, user: null, token: null}
        case 'LOGIN': 
            return {...state, user: action.payload.foundUser, token: action.payload.token}
        default:
            return state
    }
}


export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        token: null
    })

    console.log('AuthContext: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}> 
            {children} 
        </AuthContext.Provider>
    )
}