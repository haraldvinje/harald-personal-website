import React from 'react';
import AboutImage from '../images/harald2.jpg';

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1>Harald Vinje</h1>
        <p>
          Harald is a software developer and engineering graduate from{' '}
          <a
            href="https://www.ntnu.edu/studies/mtdt"
            target="_blank"
            rel="noopener noreferrer"
          >
            NTNU
          </a>
          , with a Master's degree in Computer Science, and is currently working
          at{' '}
          <a
            href="https://www.capraconsulting.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Capra Consulting
          </a>
          . Harald has good logical abilities, and displays dedication and
          passion for his work. During his years at NTNU, Harald has had a
          series of different roles and responsibilities through part time jobs,
          summer internships and voluntary work, both as a developer and in
          roles of leadership. When not working, Harald enjoys physical
          training, outdoor life, books, podcasts and video games. Harald has
          competed and achieved good results both nationally and internationally
          in rowing, and is currently competing in long distance skiing. As a
          person, Harald is open and optimistic.
        </p>
      </div>
      <img src={AboutImage} alt="Avatar" className="about-img" />
    </div>
  );
};

export default AboutMe;
