import { createColumnHelper } from '@tanstack/react-table';
import { GraduationWithStudentOutputSchema } from '../schema';
import { DataTableColumn, DataTableHeader } from '@/components/data-table';

export const GraduationAdminColumnHelper = createColumnHelper<GraduationWithStudentOutputSchema>();

export const GraduationAdminColumns: DataTableColumn<GraduationWithStudentOutputSchema>[] = [
  GraduationAdminColumnHelper.accessor('student.index', {
    header: ({ column }) => <DataTableHeader title='NIPD' column={column} />,
    cell: (info) => info.getValue(),
    size: 30,
  }),
  GraduationAdminColumnHelper.accessor('master', {
    header: ({ column }) => <DataTableHeader title='NISN' column={column} />,
    cell: (info) => info.getValue().toString().padStart(10, '0'),
    size: 50,
  }),
  GraduationAdminColumnHelper.accessor('code', {
    header: ({ column }) => <DataTableHeader title='No. Peserta' column={column} />,
    cell: (info) => info.getValue(),
    size: 100,
  }),
  GraduationAdminColumnHelper.accessor('student.personal.name', {
    header: ({ column }) => <DataTableHeader title='Nama' column={column} />,
    cell: (info) => <span className='uppercase'>{info.getValue()}</span>,
  }),
]