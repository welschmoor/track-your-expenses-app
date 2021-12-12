

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
      const createAt = timestamp.fromDate(new Date())
      const addedDoc = await collectionRef.add({ ...doc, createAt })
      dispatch({ type: "ADDDOC", payload: addedDoc })
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message })
    }
  }

  const delDoc = async id => {
    collectionRef.doc(id)
  }

  useEffect(() => {
    return () => {
      unsubRef.current = true
    }
  }, [])

  return { addDoc, delDoc, response }
}