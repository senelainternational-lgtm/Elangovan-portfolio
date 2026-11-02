import {useState} from 'react';import {motion,useReducedMotion} from 'framer-motion';import {media} from '../data/media.js';import './Media.css';
function Card({m,tx,L,i,rm}){const [bad,setBad]=useState(false);
  return(<motion.article className={'md md-'+i} initial={rm?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.65,delay:i*.12}}>
    <div className="md-img">{!m.image||bad?<div className="ph" role="img" aria-label={`${L.alt} ${tx.title}`}><span>{tx.title}</span></div>
      :<img src={m.image} alt={`${L.alt} ${tx.title}`} loading="lazy" onError={()=>setBad(true)}/>}
      {m.watchVideo&&<a className="md-watch" href={m.link} target="_blank" rel="noopener noreferrer" aria-label={`${L.watch}: ${tx.title}`}><span aria-hidden="true">▶</span>{L.watch}</a>}</div>
    <div className="md-body"><p className="md-meta">{tx.org} · {tx.date}</p><h3>{tx.title}</h3><p>{tx.text}</p></div></motion.article>);
}
export default function Media({t}){const rm=useReducedMotion();const L=t.media;
  return(<section id="media" className="media"><div className="wrap"><h2 className="sec-title">{L.heading}</h2><p className="md-sub">{L.sub}</p>
    <div className="md-grid">{media.map((m,i)=><Card key={m.id} m={m} tx={L.items[i]} L={L} i={i} rm={rm}/>)}</div></div></section>);
}
