import { Font, Image, Page, Text, View } from "@react-pdf/renderer";
import { PageSize } from "@react-pdf/types";
import { pdfFontsRoboto } from './font';
import { pdfTw } from "./tw";

Font.register(pdfFontsRoboto);

type PDFProps = {
  children: React.ReactNode
  className?: string
}

export const PDFView = ({ children, className }: PDFProps) => {
  return (
    <View style={pdfTw(className)}>
      {children}
    </View>
  )
}

export const PDFText = ({ children, className }: PDFProps) => {
  return (
    <Text style={pdfTw(className)}>
      {children}
    </Text>
  )
}

type PDFPageWithHeaderProps = PDFProps & {
  size?: PageSize
}

export const PDFPageWithHeader = ({ children, className, size }: PDFPageWithHeaderProps) => {
  return (
    <Page size={size} style={pdfTw(className)}>
      <View style={pdfTw("absolute inset-0")} fixed>
        <Image
          src={'/images/kop.png'}
          style={pdfTw("w-full h-auto")}
        />
      </View>
      {children}
    </Page>
  )
}