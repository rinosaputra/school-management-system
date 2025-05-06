import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MessagingForeground from "./lib/firebase/messaging/foreground";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./lib/firebase/auth";
import {
  FirebaseAuthContext,
  FirebaseAuthContextDispatchProps,
  FirebaseAuthContextState,
} from "./lib/firebase/auth/context";
import QueryProvider from "./lib/tanstack-query/provider";
import { Environment } from "./lib/environment";

const action = (
  state: FirebaseAuthContextState,
  { type, payload }: FirebaseAuthContextDispatchProps
) => ({
  ...state,
  [type]: payload,
  ready: true,
});

function App() {
  const [state, dispatch] = React.useReducer(action, {
    user: null,
    year: Environment.yearActive,
    ready: false,
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (import.meta.env.DEV) console.log("Auth state changed", user);
      dispatch({ type: "user", payload: user });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <QueryProvider untest>
      <FirebaseAuthContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routers} />
      </FirebaseAuthContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      <MessagingForeground />
    </QueryProvider>
  );
}

export default App;
