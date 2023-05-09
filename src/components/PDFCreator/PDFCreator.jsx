import React, {useEffect, useState} from 'react';
import {PDFDocument, StandardFonts} from 'pdf-lib'

import pdf from './FillablePDF.pdf';

const PDFCreator = () => {

  const getSkills = () => {
    return JSON.parse(window.localStorage.getItem('skills'));
  }

  async function fillForm() {
    const skills = getSkills();
    const formPdfBytes = await fetch(pdf).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();

    console.log(skills.uncommon1.current);
    form.getTextField('SkillDef_Custom1').setText(skills.uncommon1.specName);
    form.getTextField('Skill_Custom1').setText(skills.uncommon1.current.toString());

    const newFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    form.updateFieldAppearances(newFont);

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

export default PDFCreator;
