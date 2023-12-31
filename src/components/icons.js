import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

function Icons() {
    return (
        <React.Fragment>
            <a href="https://www.instagram.com/ai.integrations.us/" target="_blank" rel="noreferrer" className="AppFooter-instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:ai.integrations.us@gmail.com" target="_blank" rel="noreferrer" className="AppFooter-twitter">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </React.Fragment>
      );
}

export default Icons;