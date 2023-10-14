import {useEffect, useState} from 'react'
import { db} from "../firebase/config";
import { collection, getDocs } from 'firebase/firestore';

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(async () => {
    
    const querySnapshot = await getDocs(collection(db, collectionName))

    let results = [];
    querySnapshot.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id })
    })

    setDocuments(results)
    setError(null)

  }, [])

  return {documents, error}
}
