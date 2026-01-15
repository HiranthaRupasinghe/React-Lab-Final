import { useEffect, useState } from "react";

export default function UseEffectLab() {
const [sec,setSec]=useState(0);

useEffect(()=>{
    const id=setInterval(()=>setSec((s)=>s+1),1000);
      console.log("Rerendering is happing");
    return ()=>clearInterval(id); //clean up
},[])
//
//
  return (
    <div className="card">
      <p className="muted">useEffect runs after render. Cleanup stops leaks.</p>
      {/*  */}
      <div className="big">{sec}s</div>
      <p className="muted">Switch hook tab → timer stops (cleanup works).</p>
    </div>
  );
}