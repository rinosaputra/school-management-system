import { User } from "firebase/auth"
import React from "react"

type FirebaseAuthContextRequired = {
  user: User
  year: number
}

export type FirebaseAuthContextState = {
  user: User | null
  year: number | null
}

export type FirebaseAuthContextDispatchProps<T extends FirebaseAuthContextState = FirebaseAuthContextState, K extends keyof T = keyof T> = {
  type: K
  payload: T[K]
}

type FirebaseAuthContext = {
  state: FirebaseAuthContextState
  dispatch: (props: FirebaseAuthContextDispatchProps) => void
}

export const FirebaseAuthContext = React.createContext({} as FirebaseAuthContext)

export const useFirebaseAuth = () => React.useContext(FirebaseAuthContext)

export const useFirebaseAuthRequired = (): FirebaseAuthContextRequired => {
  const { state } = useFirebaseAuth()
  if (!state.user) throw new Error("FirebaseAuthContext: user is required")
  return {
    user: state.user,
    year: !isNaN(Number(import.meta.env.VITE_FEATURE_YEAR_ACTIVE)) ? Number(import.meta.env.VITE_FEATURE_YEAR_ACTIVE) : new Date().getFullYear(),
  }
}