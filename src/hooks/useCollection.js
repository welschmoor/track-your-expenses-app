
import { useEffect, useState} from "react"
import { firestore } from "../firebase"


const useCollection = (collection) => {
  const [fetchedDocs, setFetchedDocs] = useState([])
  const [fetchError, setFetchError] = useState(null)

  useEffect(()=>{
    let collectionRef = firestore.collection(collection)
    const unsubscribe = collectionRef.onSnapshot((snapshot)=> {
      let results = []
      snapshot.docs.forEach(e => {
        results.push({ ...e.data(), id: e.id })
      })

      setFetchedDocs(results)
      setFetchError(null)
    }, error => {
      console.log(error)
      setFetchError(error.message)
    })

    return () => unsubscribe()
  }, [collection])

  return { fetchedDocs, fetchError }
}

export default useCollection