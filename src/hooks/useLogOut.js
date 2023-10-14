import { useState } from "react"
import { auth, db } from "../firebase/config"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"
import { collection, doc, updateDoc } from "firebase/firestore"

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch, user} = useAuthContext()
    const nav = useNavigate();



    const logout = async () => {
        setError(null)
        setIsPending(true)
        const {uid} = user
        console.log(uid)
        await updateDoc(doc(db, 'users', uid), {
            online: false
        })
        signOut(auth).then(() => {
            dispatch({type: 'LOGOUT'})
            console.log('Logout successful 1')
            setIsPending(false)
            nav('/landing')
        })
        .catch((err) => {
            setError(err.message)
        })
    }

    return {error, isPending, logout}
}
