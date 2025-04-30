import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MessagingForeground from "./lib/firebase/messaging/foreground";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./lib/firebase/auth";
import {
  FirebaseAuthContext,
  FirebaseAuthContextDispatchProps,
  FirebaseAuthContextState,
} from "./lib/firebase/auth/context";

const action = (
  state: FirebaseAuthContextState,
  { type, payload }: FirebaseAuthContextDispatchProps
) => ({
  ...state,
  [type]: payload,
});

function App() {
  const [client] = React.useState(() => new QueryClient());
  const [state, dispatch] = React.useReducer(action, {
    user: null,
    year: !isNaN(Number(import.meta.env.VITE_FEATURE_YEAR_ACTIVE))
      ? Number(import.meta.env.VITE_FEATURE_YEAR_ACTIVE)
      : new Date().getFullYear(),
  });

  React.useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      dispatch({ type: "user", payload: user });
    });
  }, []);

  return (
    <QueryClientProvider client={client}>
      <FirebaseAuthContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routers} />
      </FirebaseAuthContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      <MessagingForeground />
    </QueryClientProvider>
  );
}

export default App;
