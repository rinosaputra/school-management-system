import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import GraduationAdminDocDescriptionPDF from './pdf'
import { useTypedParams } from "react-router-typesafe-routes";
import { links } from '@/routers/links';
import { useGraduationWithStudentData } from '../../../hook';

const GraduationAdminDocDescriptionLayout: React.FC = () => {
  const { docId } = useTypedParams(links.admin.graduation.doc.description)
  const { data } = useGraduationWithStudentData({})
  const result = React.useMemo(() => {
    if (!data) return null
    return data.find((item) => item.uid === docId) ?? null
  }, [data, docId])
  return (
    <PDFViewer className="w-full h-full" showToolbar={false}>
      <GraduationAdminDocDescriptionPDF result={result} />
    </PDFViewer>
  )
}

export default GraduationAdminDocDescriptionLayout
