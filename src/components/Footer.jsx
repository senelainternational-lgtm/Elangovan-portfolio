import {motion,useReducedMotion} from 'framer-motion';import {ArrowUp,Mail,Phone} from 'lucide-react';import './Footer.css';
// Replace '#' with real URLs / numbers when available.
const social=[['YouTube','https://www.youtube.com/@71Elango'],['LinkedIn','https://www.linkedin.com/in/elangovan-rengasamy/'],['Instagram','https://www.instagram.com/rtn_elangovan/?hl=en'],['Facebook','https://www.facebook.com/PR.Elangovan']];
function BrandIcon({name}){
  if(name==='YouTube')return <svg className="brand-icon youtube-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8Z" fill="#FF0033"/><path d="m9.6 15.5 6.3-3.5-6.3-3.5v7Z" fill="#fff"/></svg>;
  if(name==='LinkedIn')return <svg className="brand-icon linkedin-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0A66C2" d="M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0ZM7.12 20.45H3.56V9h3.56v11.45ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm15.11 13.02h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28Z"/></svg>;
  if(name==='Instagram')return <svg className="brand-icon instagram-icon" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="instagramGradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FFDC80"/><stop offset=".5" stopColor="#F56040"/><stop offset="1" stopColor="#C13584"/></linearGradient></defs><rect x="1" y="1" width="22" height="22" rx="6.5" fill="url(#instagramGradient)"/><rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="1.8"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8"/><circle cx="17.2" cy="6.9" r="1.1" fill="#fff"/></svg>;
  return <svg className="brand-icon facebook-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.85v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.39A12 12 0 0 0 24 12Z"/></svg>;
}
function ContactIcon({name}){
  if(name==='email')return <Mail className="contact-icon email-contact-icon" size={24} aria-hidden="true"/>;
  return <Phone className="contact-icon phone-contact-icon" size={24} aria-hidden="true"/>;
}
export default function Footer({t}){const rm=useReducedMotion();const f=t.footer;
  return(<footer id="quote" className="quote"><div className="wrap">
    <motion.blockquote initial={rm?false:{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:1}}>{f.quote}</motion.blockquote>
    <p className="q-sup">{f.support}</p>
    <h2 className="q-h">{f.connect}</h2>
    <ul className="q-contact-cards">
      <li><a className="q-contact-card" href="mailto:elangopdy@gmail.com"><span className="q-contact-icon email-contact"><ContactIcon name="email"/></span><span className="q-contact-copy"><span className="q-contact-label">{f.emailLabel}</span><strong>elangopdy@gmail.com</strong></span></a></li>
      <li><a className="q-contact-card" href="tel:+919942466663"><span className="q-contact-icon phone-contact"><ContactIcon name="phone"/></span><span className="q-contact-copy"><span className="q-contact-label">{f.phoneLabel}</span><strong>{f.mobileVal}</strong></span></a></li>
    </ul>
    <ul className="q-social-links" aria-label={f.socialLabel}>
      {social.map(([n,u])=><li key={n}><a href={u} target="_blank" rel="noopener noreferrer" aria-label={n}><BrandIcon name={n}/></a></li>)}
    </ul>
    <div className="q-bar"><p>{f.copy}</p><button className="top" onClick={()=>document.getElementById('home')?.scrollIntoView({behavior:'smooth'})}><ArrowUp size={16}/>{f.top}</button></div>
  </div></footer>);
}
