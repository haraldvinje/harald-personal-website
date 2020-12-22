import React from 'react';
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner: React.FC = () => {
  return (
    <div className="banner-text">
      <h1 className="banner-text-h1">Competency</h1>
      <hr />
      <p> AI | Public Cloud | Python | Java | Kotlin | React </p>

      <div className="social-media-links">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/haraldvinje/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social-media-links-icon"
            icon={faLinkedin}
          />
        </a>
        {/* Github */}
        <a
          href="https://github.com/haraldvinje"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social-media-links-icon"
            icon={faGithub}
          />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/user/harra161195/videos?view_as=subscriber"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social-media-links-icon"
            icon={faYoutube}
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
