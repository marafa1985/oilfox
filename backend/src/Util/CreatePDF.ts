import { PDFDocument, PDFPage } from 'pdf-lib';

const CreatePDF = async (file: string): Promise<Uint8Array> => {
    //remove image info from image
    let data: string = file.replace(/^data:image\/\w+;base64,/, "");
    let pngImageBytes: Buffer = Buffer.from(data, 'base64');
    const pdfDoc = await PDFDocument.create();
    const pngImage = await pdfDoc.embedPng(pngImageBytes);
    let page: PDFPage = pdfDoc.addPage();
    //draw the image into the pdf document
    page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: page.getWidth(),
        height: page.getHeight(),
    })

    const pdfBytes = await pdfDoc.save()
    //retur PDF document as buffer
    return pdfBytes;
}
export default CreatePDF;