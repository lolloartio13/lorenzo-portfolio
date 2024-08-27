import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
import EnIcon from '../assets/flags/en.png';
import ItIcon from '../assets/flags/it.png';

import LogoReact from '../assets/common/react_logo_2.png';

function Header() {
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
    <div className="news-ticker">
    <p className="news-text">{t("expReact")}</p>
  </div>
    <nav className="navbar">
      <h1 className='title'>Lorenzo Artioli DEV</h1>
      <div className="lang-buttons">
        <button className="lang-button" onClick={() => handleChangeLanguage("en")}>
          <img src={EnIcon} alt="English" />
        </button>
        <button className="lang-button" onClick={() => handleChangeLanguage("it")}>
          <img src={ItIcon} alt="Italiano" />
        </button>
      </div>
    </nav>
  </div>
  );
}

export default Header;
