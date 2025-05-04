import { useQuery } from "@tanstack/react-query";
import lodash from 'lodash'
import { LocalSchema } from "./schema";

export const useLocal = ()=> {
  const { data, isLoading } = useQuery({
    queryKey: ["local"],
    queryFn: async () => {
      const res = await import("./data.json");
      return res.default as unknown as LocalSchema;
    }
  });
  return {
    data: lodash.chain(data),
    isLoading,
    token: data?.token ?? "",
  };
}