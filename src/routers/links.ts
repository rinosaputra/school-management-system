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
    admin: route({
      path: "admin",
      children: {
        graduation: route({
          path: "graduation"
        })
      }
    }),
    sign: route({
      path: "sign",
      children: {
        in: route({ path: "in" }),
        up: route({ path: "up" }),
      }
    })
  }
})