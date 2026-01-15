import { useMemo, useState } from "react";

export default function UseMemoLab() {
    const[n,setN]=useState(2000000);
    const[x,setX]=useState(0);
    const expensive=useMemo(()=>{
        let s=0;
        for(let i=0;i<n;i++) s+=i;
        console.log("You are clicking on n that is ehy i am recomputed");
        return s;
    },[n])
  
  return (
    <div className="card">
      <p className="muted">
        useMemo caches derived computation (until deps change).
      </p>

      <div className="row">
        
        <input className="input" 
        type="number"
        value={n}
        onChange={(e)=>setN(Number(e.target.value))}/>
        
        <button className="btn"
        onClick={()=>setX(v=>v+1)}>Unrelated:{x}</button>
      </div>
      
      <div className="result">
        Sum(0..{n - 1}) = <b>{expensive}</b>
      </div>
    </div>
  );
}