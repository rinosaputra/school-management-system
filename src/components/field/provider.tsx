import React from 'react'
import { FieldContext, FieldContextAction, FieldContextState } from './hook';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../ui/form';

const defaultState: FieldContextState = {
  isOpen: false,
  isLoading: false,
}

const actionHandler = (state: FieldContextState, action: FieldContextAction) => {
  switch (action.type) {
    case "isOpen":
      return { ...state, isOpen: action.payload };
    case "isLoading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

type FieldProviderProps<S extends z.ZodAny = z.ZodAny> = {
  name: string
  schema: S
  defaultValues?: z.infer<S>
}

const FieldProvider: React.FC<React.PropsWithChildren<FieldProviderProps>> = ({ children, name, schema, defaultValues }) => {
  const [state, dispatch] = React.useReducer(actionHandler, defaultState);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues
  })
  return (
    <Form {...form}>
      <FieldContext.Provider
        value={{
          state: {
            ...state,
            name
          },
          dispatch,
        }}
        children={children}
      />
    </Form>
  )
}

export default FieldProvider
