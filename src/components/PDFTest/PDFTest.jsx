import React, {useEffect} from 'react';
import {PDFDocument} from 'pdf-lib'

import pdf from './FillablePDF.pdf';

const PdfTest = () => {

  async function fillForm() {
    const formPdfBytes = await fetch(pdf).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    console.log(pdfDoc.getPages().length);

    const form = pdfDoc.getForm();

    form.getTextField('Investigators_Name').setText('Nombre por defecto');

    const pdfBytes = await pdfDoc.save().then(savedPDF => {
      let file = new Blob([savedPDF], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });

  }

  useEffect(() => {
    fillForm();
  }, [])

  return (
    <div>

    </div>
  );
};

export default PdfTest;
