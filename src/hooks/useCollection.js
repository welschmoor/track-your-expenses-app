
import { useEffect, useState, useRef} from "react"
import { firestore } from "../firebase"


const useCollection = (collection, _query) => {
  const [fetchedDocs, setFetchedDocs] = useState([])
  const [fetchError, setFetchError] = useState(null)
  console.log("FDOCS:::", fetchedDocs)
  // using ref because array _query gives infinite loop as a useEffect dependency
  const query = useRef(_query).current
 

  useEffect(()=>{
    let collectionRef = firestore.collection(collection)

    if (query) {
      collectionRef = collectionRef.where(...query)
    }


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
  }, [collection, query])

  return { fetchedDocs, fetchError }
}

export default useCollection