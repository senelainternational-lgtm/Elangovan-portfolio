import {useEffect,useState} from 'react';import {motion,useReducedMotion} from 'framer-motion';import {Play,X} from 'lucide-react';import {awards} from '../data/awards.js';import './Awards.css';
function Card({a,tx,L,i,rm,onPreview}){
  return(<motion.article className="aw" initial={rm?false:{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay:i*.12}}>
    <div className="aw-media"><img src={a.poster} alt={tx.title} loading="lazy" onError={e=>{e.currentTarget.style.display='none'}}/>
      <div className="aw-ph" aria-hidden>{tx.title}</div>
      {a.showPreview&&<button className="aw-btn" onClick={()=>onPreview(a)} aria-label={`${L.watch}: ${tx.title}`}><Play size={16}/><span>{L.watch}</span></button>}</div>
    <div className="aw-body"><h3>{tx.title}</h3><p className="aw-meta"><span>{L.org}: {tx.org}</span><span>{L.year}: {tx.year}</span></p>
      <ul>{tx.lines.map((l,i)=><li key={i}>{l}</li>)}</ul></div></motion.article>);
}
export default function Awards({t}){const rm=useReducedMotion();const L=t.awards;
  const [preview,setPreview]=useState(null);const [videoFailed,setVideoFailed]=useState(false);
  useEffect(()=>{if(!preview)return;const previousOverflow=document.body.style.overflow;const onKeyDown=e=>e.key==='Escape'&&setPreview(null);
    document.body.style.overflow='hidden';window.addEventListener('keydown',onKeyDown);
    return()=>{document.body.style.overflow=previousOverflow;window.removeEventListener('keydown',onKeyDown)}},[preview]);
  const openPreview=award=>{setVideoFailed(false);setPreview(award)};
  return(<section id="award" className="awards"><div className="wrap"><h2 className="sec-title">{L.heading}</h2><p className="aw-sub">{L.sub}</p>
    <div className="aw-grid">{awards.map((a,i)=><Card key={a.id} a={a} tx={L.items[i]} L={L} i={i} rm={rm} onPreview={openPreview}/>)}</div></div>
    {preview&&<div className="aw-preview-backdrop" onMouseDown={e=>e.target===e.currentTarget&&setPreview(null)}>
      <section className="aw-preview" role="dialog" aria-modal="true" aria-labelledby="aw-preview-title">
        <div className="aw-preview-header"><h2 id="aw-preview-title">{L.items[preview.id-1].title}</h2><button className="aw-preview-close" onClick={()=>setPreview(null)} aria-label={L.close}><X size={22}/></button></div>
        {preview.video?(videoFailed?<p className="aw-preview-error" role="alert">{L.videoError}</p>:<video src={preview.video} controls autoPlay playsInline onError={()=>setVideoFailed(true)} />):<img src={preview.poster} alt={L.items[preview.id-1].title}/>}
      </section>
    </div>}
  </section>);
}
