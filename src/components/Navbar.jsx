import {useState,useEffect} from 'react';import {Menu,X} from 'lucide-react';import {AnimatePresence,motion} from 'framer-motion';import './Navbar.css';
const ids=['home','about','award','media','quote'];
export default function Navbar({t,lang,setLang}){
  const [active,setActive]=useState('home');const [open,setOpen]=useState(false);const [solid,setSolid]=useState(false);
  useEffect(()=>{
    const els=ids.map(i=>document.getElementById(i)).filter(Boolean);
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});
    els.forEach(e=>io.observe(e));const on=()=>setSolid(window.scrollY>40);on();window.addEventListener('scroll',on,{passive:true});
    return()=>{io.disconnect();window.removeEventListener('scroll',on)};
  },[]);
  const go=id=>e=>{e.preventDefault();setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
  const Lang=()=>(<div className="lang" role="group" aria-label={t.nav.lang}>
    <button aria-pressed={lang==='en'} className={lang==='en'?'on':''} onClick={()=>setLang('en')}>EN</button><span aria-hidden>|</span>
    <button aria-pressed={lang==='ta'} className={lang==='ta'?'on':''} onClick={()=>setLang('ta')} lang="ta">தமிழ்</button></div>);
  return(<header className={'nav'+(solid?' solid':'')}><div className="nav-in">
    <a href="#home" className="brand" onClick={go('home')}>Elangovan R.</a>
    <nav aria-label={t.nav.main} className="links">{ids.map(i=>(<a key={i} href={'#'+i} onClick={go(i)} className={active===i?'act':''} aria-current={active===i?'true':undefined}>{t.nav[i]}
      {active===i&&<motion.span layoutId="ul" className="ul"/>}</a>))}</nav>
    <div className="right"><Lang/><button className="burger" aria-label={open?t.nav.close:t.nav.menu} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button></div></div>
    <AnimatePresence>{open&&<motion.nav className="mobile" aria-label={t.nav.main} initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
      {ids.map(i=><a key={i} href={'#'+i} onClick={go(i)} className={active===i?'act':''}>{t.nav[i]}</a>)}</motion.nav>}</AnimatePresence></header>);
}
