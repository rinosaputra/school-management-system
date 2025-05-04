import React from 'react'

type DataTableRowProps = {
  value: string | number
  className?: string
}

export const DataTableRow: React.FC<DataTableRowProps> = ({ value, className }) => {
  return (
    <span className={className}>
      {value}
    </span>
  )
}