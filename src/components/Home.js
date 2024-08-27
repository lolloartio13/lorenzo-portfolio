import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/Home.css'
import Ezio from '../assets/common/ezio.jpg'
import Box from './Box'
import LogoOnu from '../assets/common/onu_logo.png'
import Itsar from '../assets/common/itsar.jpg'
import Fermi from '../assets/common/efermi.jpg'
import Antek from '../assets/common/antek.png'
import Curryosity from '../assets/common/curryosity.png'
import Footer from './Footer'
import { skills } from '../helpers/Skills'
import LogoReact from '../assets/common/react.png'
import LogoFigma from '../assets/common/figma.png'
import LogoFirebase from '../assets/common/firebase.png'
import LogoCapcut from '../assets/common/capcut.png'
import LogoPy from '../assets/common/Python.png'
import LogoHtml from '../assets/common/lohtml.jpg'
import LogoC from '../assets/common/clogo.png'
import LogoCss from '../assets/common/css.png'
import LogoVue from '../assets/common/vue.png'
import LogoJava from '../assets/common/java.png'
import LogoSwift from '../assets/common/swift.png'
import LogoTw from '../assets/common/teamwork.jpg'
import LogoAngular from '../assets/common/angular.jpg'
import LogoAndroid from '../assets/common/android.jpg'
import LogoMySql from '../assets/common/mysql.jpg'
import LogoProjectManagement from '../assets/common/project management.jpg'
import LogoEng from '../assets/common/eng.png'



function Home({onMoreInfoClick}) {
    const [t, i18n] = useTranslation("global");
    const itsSkills = [
        { name: "React", img: LogoReact},
        { name: "Vue", img: LogoVue},
        { name: "Angular", img: LogoAngular},
        { name: "Swift", img: LogoSwift},
        { name: "Python", img: LogoPy},
        { name: "MySQL", img: LogoMySql},
        { name: "Java", img: LogoJava},
        { name: "Android", img: LogoAndroid},
        { name: "Team Working", img: LogoTw},
        { name: "Project Management", img: LogoProjectManagement},
    ]
    const curryositySkills = [
        { name: "React", img: LogoReact},
        { name: "Firebase", img: LogoFirebase},
        { name: "Figma", img: LogoFigma},
        { name: "CapCut", img: LogoCapcut}
    ]
    const fermiSkills = [
        { name: "Python", img: LogoPy},
        { name: "c++", img: LogoC},
        { name: "HTML", img: LogoHtml},
        { name: "css", img: LogoCss}
    ]
    const antekSkills = [
        { name: "Angular", img: LogoAngular},
        { name: "Figma", img: LogoFigma},
        { name: "Team Working", img: LogoTw},
        { name: t("eng"), img: LogoEng}
    ]
    const nySkills = [
        { name: t("eng"), img: LogoEng},
        { name: "Team Working", img: LogoTw}
    ]
  return (
    <div className='home'>
        <div className='flexbox'>
            <div className='frame-container'>
                <img src={Ezio} alt="Esempio" className="image-frame" />
            </div>
            <div className='container'>
                <h1 className='h1'><span className='pre-auto-type'>{t("ima")} </span> <span className='auto-type'>{t("software")}</span></h1>
            </div>
        </div>
        <div className='box-container'>
            <Box 
            title={t("its")} 
            content={t("itsExp")} 
            imageUrl={Itsar} 
            link="https://www.itsrizzoli.it/corsi/software-architect-specialist/" 
            onMoreInfoClick={onMoreInfoClick}
            modalTitle={t("its")}
            modalContent={t("itsDesc")}
            modalWebSite="https://www.itsrizzoli.it/corsi/software-architect-specialist/"
            modalYear="2022-2024"
            modalPlace={t("mi")}
            modalSkills={itsSkills}
            />
            <Box 
            title={t("antek")} 
            content={t("antekExp")}
            imageUrl={Antek}
            link="https://www.antek.it/" 
            onMoreInfoClick={onMoreInfoClick}
            modalTitle={t("antek")}
            modalContent={t("antekDesc")}
            modalWebSite="https://www.antek.it/"
            modalYear="2024"
            modalPlace={t("mn")}
            modalSkills={antekSkills}
            />
            <Box 
            title={t("basket")} 
            content={t("basketExp")}
            imageUrl={Curryosity}
            link="https://basketballcurryosity.com/" 
            onMoreInfoClick={onMoreInfoClick}
            modalTitle={t("basket")}
            modalContent={t("curryosityDesc")}
            modalWebSite="https://basketballcurryosity.com/"
            modalYear="2024"
            modalPlace={t("mn")}
            modalSkills={curryositySkills}
            />
            <Box 
            title={t("nyExp")} 
            content={t("ny")} 
            imageUrl={LogoOnu}
            link="https://imuna.org/nhsmun/nyc" 
            onMoreInfoClick={onMoreInfoClick}
            modalTitle={t("nyExp")}
            modalContent={t("nyDesc")}
            modalWebSite="https://imuna.org/nhsmun/nyc"
            modalYear="2019"
            modalPlace={t("new")}
            modalSkills={nySkills}
            />
            <Box 
            title={t("fermi")}
            content={t("fermiExp")}
            imageUrl={Fermi}
            link="https://www.fermimn.edu.it/" 
            onMoreInfoClick={onMoreInfoClick}
            modalTitle={t("fermi")}
            modalContent={t("fermiDesc")}
            modalWebSite="https://www.fermimn.edu.it/"
            modalYear="2016-2021"
            modalPlace={t("mn")}
            modalSkills={fermiSkills}
            />
        </div>
    </div>
  )
}

export default Home