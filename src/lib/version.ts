export const VersionPath = "versions"

export type VersionPathFirestore<T> = [typeof VersionPath, string, T, ...string[]]

export function VersionPathFirestore<T>(key: T, ...props: (string | undefined)[]): VersionPathFirestore<T> {
  return [
    VersionPath,
    import.meta.env?.VITE_APP_VERSION ?? "1",
    key,
    ...props.filter(Boolean),
  ] as VersionPathFirestore<T>
}