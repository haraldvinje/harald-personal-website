import React from 'react';
import CodingImg from '../images/coding.png';

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <div className="contact">
      <p>
        Send an email to <b>haraldvinje 'at' gmail.com </b> or send me a message
        on{' '}
        <a
          href="https://www.linkedin.com/in/haraldvinje/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        if you'd like to get in touch!
      </p>
      <img src={CodingImg} alt="something went wrong with loading" />
    </div>
  );
};

export default Contact;
