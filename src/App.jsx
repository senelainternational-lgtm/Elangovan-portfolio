import {useState,useEffect} from 'react';
import {translations} from './data/translations.js';
import Navbar from './components/Navbar.jsx';import Hero from './components/Hero.jsx';import About from './components/About.jsx';
import Awards from './components/Awards.jsx';import Media from './components/Media.jsx';import Footer from './components/Footer.jsx';import './App.css';
export default function App(){
  const [lang,setLang]=useState(()=>{try{return localStorage.getItem('lang')==='ta'?'ta':'en'}catch{return 'en'}});
  useEffect(()=>{document.documentElement.lang=lang;try{localStorage.setItem('lang',lang)}catch{}},[lang]);
  const t=translations[lang];
  return(<><Navbar t={t} lang={lang} setLang={setLang}/><main key={lang+'-m'} className="fade"><Hero t={t}/><About t={t} lang={lang}/><Awards t={t}/><Media t={t}/></main><Footer t={t}/></>);
}
