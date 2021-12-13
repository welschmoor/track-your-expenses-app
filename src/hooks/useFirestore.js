

import { useReducer, useEffect, useState, useRef } from "react"
import { firestore, timestamp } from "../firebase"


const initialState = {
  document: null,
  loadingBool: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "ADDDOC":
      return { ...state, loadingBool: false, document: action.payload }
    case "PENDING":
      return { ...state, loadingBool: true, document: null, success: false, error: null }
    case "ERROR":
      return { ...state, error: action.payload }
    case "DELDOC":
      return { ...state, document: null, loadingBool: false, error: null }
    default:
      return state
  }
}


export const useFirestore = collectionName => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const unsubRef = useRef(false)

  const collectionRef = firestore.collection(collectionName)

  const addDoc = async (doc) => {
    dispatch({ type: "PENDING" })
    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDoc = await collectionRef.add({ ...doc, createdAt })
      dispatch({ type: "ADDDOC", payload: addedDoc })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message })
    }
  }

  const delDoc = async id => {
    dispatch({ type: "PENDING" })
    try {
      collectionRef.doc(id).delete()
      dispatch({ type: "DELDOC" })
    } catch (error) {
      dispatch({ type: "ERROR", paylaod: "Delete failed" })
    }
  }

  useEffect(() => {
    return () => {
      unsubRef.current = true
    }
  }, [])

  return { addDoc, delDoc, response }
}