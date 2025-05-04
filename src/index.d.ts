type UseQueryHookProps<T> = T & {
  online?: boolean;
  disabled?: boolean;
}

type UseQueryHookResult<R> = {
  isLoading: boolean
  data: R | undefined;
  token: string;
}

type UseQueryHookResults<R> = UseQueryHookResult<R[]>
