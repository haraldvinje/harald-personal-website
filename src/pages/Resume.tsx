import React from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from '../static/HaraldVinjeResume.pdf';
import Loader from 'react-loader-spinner';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <div className="resume-intro">
        <h3>
          {' '}
          <b>Check out my resume! </b>
        </h3>
        <p>Updated January 2021</p>
      </div>
      <Document
        file={samplePDF}
        loading={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Page className="pdf-document" pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
