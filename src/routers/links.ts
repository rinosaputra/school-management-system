import { route } from "react-router-typesafe-routes";

export const links = route({
  children: {
    features: route({
      path: "features",
      children: {
        graduation: route({
          path: "graduation",
        }),
      }
    }),
  }
})