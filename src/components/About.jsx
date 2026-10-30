import {useState} from 'react';
import {motion,useReducedMotion} from 'framer-motion';
import {translations} from '../data/translations.js';
import './About.css';
const aboutPortrait=`${import.meta.env.BASE_URL}assets/images/Elangovan-md.jpeg`;
function AboutParagraph({children,lang}){return <p lang={lang}>{children.split(/(\*\*[^*]+\*\*)/g).map((part,i)=>part.startsWith('**')&&part.endsWith('**')?<strong key={i}>{part.slice(2,-2)}</strong>:part)}</p>}
function Img({alt}){const [bad,setBad]=useState(false);
  return <div className="ab-img">{bad?<div className="ph" role="img" aria-label={alt}><span>Image placeholder</span><small>{aboutPortrait}</small>
  </div>
  :<img src={aboutPortrait} alt={alt} loading="lazy" onError={()=>setBad(true)}/>}</div>}
export default function About({t,lang}){
    const rm=useReducedMotion();const en=translations.en.about.sections;
    const rv=rm?{}:{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:true,margin:'-80px'},transition:{duration:.7}};
  return(<section id="about" className="about"><div className="wrap"><motion.h2 className="sec-title about-h" {...rv}>{t.about.heading}</motion.h2>
    {t.about.sections.map((s,i)=>{const paras=s.paras||en[i].paras;const fb=!s.paras;const quote=s.quote||en[i].quote;
      return(<article key={i} className={'ab-sec'+(i%2?' flip':'')+(i===0?' first':'')}>
        {i===0&&<Img alt={t.about.alt}/>}
        <motion.div className="ab-text" {...rv}><h3 lang={fb&&lang==='ta'?undefined:undefined}>{s.title}</h3>
          {paras.map((p,j)=><AboutParagraph key={j} lang={fb?'en':undefined}>{p}</AboutParagraph>)}
          {quote&&<p className="about-ambition" lang={s.quote?undefined:'en'}>{quote}</p>}</motion.div></article>)})}
  </div></section>);
}
