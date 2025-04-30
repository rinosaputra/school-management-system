import { createBrowserRouter } from "react-router-dom";
import { links } from "./links";

export const routers = createBrowserRouter([
  {
    path: links.$path(),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/features/_home")).default
        })
      },
      {
        path: links.app.$path(),
        children: [
          {
            path: links.app.graduation.$path(),
            lazy: async () => ({
              Component: (await import("@/features/graduation")).default
            }),
          },
        ]
      },
      {
        path: links.sign.$path(),
        lazy: async () => ({
          Component: (await import("@/features/_sign/layout")).default
        }),
        children: [
          {
            path: links.sign.in.$path(),
            lazy: async () => ({
              Component: (await import("@/features/_sign/in")).default
            })
          }
        ]
      },
      {
        path: links.admin.$path(),
        lazy: async () => ({
          Component: (await import("@/features/_admin/layout")).default
        }),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import("@/features/_admin")).default
            }),
          },
          {
            path: links.admin.graduation.$path(),
            lazy: async () => ({
              Component: (await import("@/features/graduation/_admin")).default
            }),
          },
        ]
      },
      // {
      //   path: links.sign.$path(),
      //   lazy: async () => ({
      //     Component: (await import("@/pages/sign/_layout")).default
      //   }),
      //   children: [
      //     {
      //       path: links.sign.in.$path(),
      //       lazy: async () => ({
      //         Component: (await import("@/pages/sign/in")).default
      //       })
      //     },
      //     {
      //       path: links.sign.up.$path(),
      //       lazy: async () => ({
      //         Component: (await import("@/pages/sign/up")).default
      //       })
      //     }
      //   ]
      // },
    ]
  }
])