
import React from 'react';
import '../styles/Box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Box = ({ title, content, imageUrl, link, onMoreInfoClick, modalTitle, modalContent, modalWebSite, modalYear, modalPlace, modalSkills=[] }) => {
  const { t, i18n } = useTranslation("global");
  const handleMoreInfoClick = () => {
    onMoreInfoClick(modalTitle, modalContent, modalWebSite, modalYear, modalPlace, modalSkills);
  };
  return (
    <div className="box">
      {imageUrl && <img src={imageUrl} alt={title} className="box-image" />}
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="box-icons">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="box-link">
            <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
          </a>
        )}
      </div>
      <button onClick={handleMoreInfoClick} className="box-button" target="_blank" rel="noopener noreferrer">{t("find")}</button>
    </div>
  );
};

export default Box;
