import React from "react"
import {
  AccessorKeyColumnDef,
  ColumnDef,
  RowData,
  Table,
} from "@tanstack/react-table"

export type DataTableColumn<Output> = ColumnDef<Output> | AccessorKeyColumnDef<Output, any>

export type DataTableContext<T extends RowData = RowData> = {
  table: Table<T>
  data: T[]
  columns: DataTableColumn<T>[]
}

export const DataTableContext = React.createContext<DataTableContext>({} as DataTableContext)

export function useDataTable<T extends RowData>(): DataTableContext<T> {
  const context = React.useContext(DataTableContext)
  if (!context) {
    throw new Error("useDataTable must be used within a DataTableProvider")
  }
  return context as DataTableContext<T>
}