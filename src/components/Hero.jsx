import {useState} from 'react';import {motion,useReducedMotion} from 'framer-motion';import './Hero.css';
export default function Hero({t}){
  const h=t.hero;const rm=useReducedMotion();const [bad,setBad]=useState(false);const [mv,setMv]=useState({x:0,y:0});
  const up=d=>rm?{}:{initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{duration:.8,delay:d,ease:[.2,.7,.2,1]}};
  return(<section id="home" className="hero"><div className="wrap hero-grid">
    <div className="hero-copy">
      <motion.p className="hero-label" {...up(.1)}>{h.label}</motion.p>
      <motion.h1 {...up(.25)}><span>{h.first}</span> <span>{h.last}</span></motion.h1>
      <motion.p className="hero-intro" {...up(.4)}>{h.intro}</motion.p>
      <div className="hero-paras"><motion.p {...up(.55)}>{h.paras.join(' ')}</motion.p></div>
      <motion.div className="sig-row" {...up(1.1)}>
        <svg className="sig" viewBox="0 0 360 100" role="img" aria-label={`${h.sig} signature`}>
          <text x="4" y="72" className="sig-text" lang="en">{h.sig}</text>
          <path className="sig-flourish" d="M8 83C66 75 124 73 183 79S276 89 337 73"/>
        </svg>
      </motion.div>
    </div>
    <motion.div className="hero-img" initial={rm?false:{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} transition={{duration:1.2,delay:.3,ease:[.7,0,.2,1]}}
      onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setMv({x:((e.clientX-r.left)/r.width-.5)*10,y:((e.clientY-r.top)/r.height-.5)*10})}} onMouseLeave={()=>setMv({x:0,y:0})}>
      {bad?<div className="ph" role="img" aria-label={h.alt}><span>Portrait placeholder</span><small>public/assets/images/elangovan-hero-dark.png</small></div>
      :<img src="/assets/images/elangovan-hero-dark.png" alt={h.alt} onError={()=>setBad(true)} style={{'--portrait-x':`${mv.x}px`,'--portrait-y':`${mv.y}px`}}/>}
    </motion.div></div></section>);
}
