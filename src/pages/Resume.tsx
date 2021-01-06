import React from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from '../static/HaraldVinjeResume.pdf';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <Document file={samplePDF}>
        <Page className="pdf-document" pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
