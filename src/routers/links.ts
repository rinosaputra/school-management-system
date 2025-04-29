import { number, string, route } from "react-router-typesafe-routes";

export const links = route({
  children: {
    app: route({
      path: "app",
      children: {
        graduation: route({
          path: "graduation",
          children: {
            detail: route({
              path: ":studentEncodeId/:yearId?",
              params: {
                studentEncodeId: string(),
                yearId: number(),
              },
            })
          }
        }),
      }
    }),
  }
})