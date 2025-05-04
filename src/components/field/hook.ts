import React from "react"
import { FieldValues, useFormContext } from "react-hook-form"

export type FieldContextState = {
  isOpen: boolean
  isLoading: boolean
}


export type FieldContextAction<K extends keyof FieldContextState = keyof FieldContextState> = {
  type: K
  payload: FieldContextState[K]
}

export type FieldContextDispatch = (action: FieldContextAction) => void


export type FieldContext = {
  state: FieldContextState & {
    name: string
  }
  dispatch: FieldContextDispatch
}

export const FieldContext = React.createContext<FieldContext>({} as FieldContext)

export function useField<T extends FieldValues = FieldValues>() {
  const context = React.useContext(FieldContext)
  const form = useFormContext<T>()
  if (!(context && form)) {
    throw new Error("useField must be used within a FieldProvider")
  }
  if (import.meta.env.DEV) console.log("Field Name: ", context.state.name)
  return {
    ...context,
    form
  }
}