"use client";
import {useEffect,useState} from "react";
export default function WelcomeSplash(){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{
  try{if(sessionStorage.getItem("naxyus-welcome-seen")==="1")setVisible(false);}catch{}
 },[]);
 function enter(){
  try{sessionStorage.setItem("naxyus-welcome-seen","1");}catch{}
  setVisible(false);
 }
 if(!visible)return null;
 return <div className="welcome-splash" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
  <div className="welcome-grid" aria-hidden="true"/>
  <div className="welcome-content">
   <div className="welcome-brand"><img src="/assets/naxyus-mark.webp" alt="" width="42" height="42"/> <span>NAXYUS</span></div>
   <p className="welcome-kicker">INDEPENDENT TECHNOLOGY ECOSYSTEM</p>
   <h1 id="welcome-title">Technology<br/><em>Without</em> Boundaries<span>.</span></h1>
   <p className="welcome-copy">Ideas become experiences. Possibilities become connected systems.</p>
   <button className="welcome-enter" onClick={enter}>Enter NAXYUS <span aria-hidden="true">↗</span></button>
   <p className="welcome-foot">INDEPENDENT IDEAS. CONNECTED POSSIBILITIES.</p>
  </div>
  <div className="welcome-orb" aria-hidden="true"><i/><b/><span/></div>
 </div>;
}
