import { useState } from "react";
import { auth, db, storage } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import {doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const useSignupAwait = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const nav = useNavigate();


  
  const signup = async (user) => {

    const {email, password, name: displayName} = user

    
    setError(null);
    console.log(user)
    try {

      const response = await fetch('http://localhost:5000/users/register',{
        method: "POST", 
        body: JSON.stringify(user)
      })

      // const res = await createUserWithEmailAndPassword(
      //   auth,
      //   email,
      //   password,
      //   displayName,
      //   photoURL
      // );
      console.log("User Created: ", response);

    //   const path = `images/${res.user.uid}/${photoURL.name}`;
    //   const storageRef = ref(storage, path);

    //   await uploadBytes(storageRef, photoURL);
    //   const imgURL = await getDownloadURL(ref(storage, path));

    //  await updateProfile(res.user, {
    //     displayName,
    //     photoURL: imgURL,
    //   });
    //   console.log("User Updated");

    //   dispatch({
    //     type: "LOGIN",
    //     payload: res.user,
    //   });

    //   const docRef = doc(db, "users", res.user.uid);
    //   const data = {
    //     displayName: res.user.displayName,
    //     online: true,
    //     photoURL: res.user.photoURL
    //    };
    //   await setDoc(docRef, data);

    //   console.log("Document Created");
      nav("/");
    } catch (error) {
      console.error(error);
    }
  };
  return { error, signup };
};
