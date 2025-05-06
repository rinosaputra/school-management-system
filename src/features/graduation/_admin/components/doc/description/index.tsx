import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { links } from '@/routers/links'
import { PDFViewer } from '@react-pdf/renderer'
import GraduationAdminDocDescriptionPDF from './pdf'
import { GraduationWithStudentOutputSchema } from '@/features/graduation/schema'

const titleGraduationAdminDocDescription = "Surat Keterangan Lulus"
type GraduationAdminDocDescriptionProps = {
  result: GraduationWithStudentOutputSchema | null
  open: boolean
  onOpenChange(open: boolean): void
}


const GraduationAdminDocDescription: React.FC<GraduationAdminDocDescriptionProps> = ({ open, onOpenChange, result }) => {

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{titleGraduationAdminDocDescription}</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="grid gap-4 py-4 release flex-1">
          <PDFViewer className="w-full h-full" showToolbar={false}>
            <GraduationAdminDocDescriptionPDF result={result} />
          </PDFViewer>
        </div>
        <SheetFooter>
          <div className='flex justify-end space-x-2'>
            {!result ? null : <Link to={links.admin.graduation.doc.description.$buildPath({
              params: {
                docId: result.uid,
              }
            })} className={buttonVariants({ variant: 'outline', size: "icon" })}>
              <Eye />
            </Link>}
            <SheetClose asChild>
              <Button type="submit" className='flex-1'>Save changes</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default GraduationAdminDocDescription
