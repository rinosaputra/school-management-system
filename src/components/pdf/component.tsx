import { Font, Text, View } from "@react-pdf/renderer";
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