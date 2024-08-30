import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import '../assets/common/antek.png'
import resume from '../assets/common/resume.pdf'


const Footer = () => {
    const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/lorenzo-artioli-7b072b325"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            <span className="tooltip">{t("link")}</span> {/* Tooltip per LinkedIn */}
          </a>
          <a
            href={resume}
            download="Resume"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} className="footer-icon" />
            <span className="tooltip">{t("cv")}</span> {/* Tooltip per CV */}
          </a>
        </div>
        <div className="footer-contact">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> 
            {t("mn")}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="contact-icon" /> 
            +39 349 5066939
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> 
            lorenzo2002artioli@gmail.com
          </p>
        </div>
        <p className="footer-text">Lorenzo Artioli</p>
      </div>
    </footer>
  );
};

export default Footer;