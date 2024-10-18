// src/App.js

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'
import { faFileAlt, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [t, i18n] = useTranslation("global");
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalYear, setModalYear] = useState('');
  const [modalPlace, setModalPlace] = useState('');
  const [modalWebSite, setModalWebSite] = useState('');
  const [modalSkills, setMOdalSkills] = useState([]);

  const toggleModal = (title = '', content = '', webSite = '', year='', place='', skills=[]) => {
    setModal(!modal);
    setModalTitle(title);
    setModalContent(content);
    setModalWebSite(webSite);
    setModalYear(year);
    setModalPlace(place);
    setMOdalSkills(skills);

  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  useEffect(() => {
    document.title = "Lorenzo Artioli DEV";
  }, []);

  return (
    <div className="App">
      <Header />
      <Home onMoreInfoClick={toggleModal} />
      <Footer />
      {modal && (
        <div className="modal">
          <div onClick={() => toggleModal()} className="overlay"></div>
          <div className="modal-content">
            <h2 className='modal-title'>{modalTitle}</h2>
            <p className='modal-place'><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />{modalPlace}</p>
            <p className='modal-year'><FontAwesomeIcon icon={faCalendar} className="contact-icon" />{modalYear}</p>
            <p className='modal-site'><FontAwesomeIcon icon={faGlobe} className="contact-icon" /><a href={modalWebSite}>{modalWebSite}</a></p>
            <p className='modal-desc'>{modalContent}</p>
            <div className="skills-container">
                {modalSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.img} alt={skill.name} className="skill-img" />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
            <button className="close-modal" onClick={() => toggleModal()}>
            <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
