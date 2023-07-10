import React, { useEffect, useState } from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib'

import pdf from './FillablePDF.pdf';

const PDFCreator = () => {

  const getStats = () => {
    return JSON.parse(window.localStorage.getItem('stats'));
  }

  const getOccupation = () => {
    return JSON.parse(window.localStorage.getItem('occupation'));
  }

  const getSkills = () => {
    return JSON.parse(window.localStorage.getItem('skills'));
  }

  async function fillForm() {
    const stats = getStats();
    const occupation = getOccupation();
    const skills = getSkills();
    const formPdfBytes = await fetch(pdf).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();



    // form.getTextField('SkillDef_Custom1').setText(skills.uncommon1.specName);
    // form.getTextField('Skill_Custom1').setText(skills.uncommon1.current.toString());

    form.getTextField('STR').setText(stats.str);
    form.getTextField('CON').setText(stats.con);
    form.getTextField('DEX').setText(stats.dex);
    form.getTextField('INT').setText(stats.int);
    form.getTextField('SIZ').setText(stats.siz);
    form.getTextField('POW').setText(stats.pow);
    form.getTextField('APP').setText(stats.app);
    form.getTextField('EDU').setText(stats.edu);

    form.getTextField('StartingHP').setText(stats.hp);
    form.getTextField('CurrentHP').setText(stats.hp);
    form.getTextField('StartingLuck').setText(stats.luck);
    form.getTextField('CurrentLuck').setText(stats.luck);
    form.getTextField('StartingSanity').setText(stats.sanity);
    form.getTextField('CurrentSanity').setText(stats.sanity);

    form.getTextField('Build').setText(stats.build);
    form.getTextField('DamageBonus').setText(stats.db);

    form.getTextField('Occupation').setText(occupation.name);

    for (const skill of Object.entries(skills)) {
      let [name, content] = skill;
      try {
        let fUpperName = name.charAt(0).toUpperCase() + name.slice(1);
        form.getTextField(`Skill_${fUpperName}`).setText(content.current.toString());

        if (content.isSpec)
          form.getTextField(`SkillDef_${fUpperName}`).setText(content.specName)
      }
      catch {
        continue;
      }
    }


    const newFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    form.updateFieldAppearances(newFont);

    const pdfBytes = await pdfDoc.save().then(savedPDF => {
      let file = new Blob([savedPDF], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });

  }

  useEffect(() => {
    fillForm();
  }, [])

  return (
    <div>
      Fill the remaining data on the fillable pdf after it has finished downloading
    </div>
  );
};

export default PDFCreator;
