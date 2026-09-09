import React, { useEffect, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function Timer() {
  const [seconds, setSeconds] = useState(25*60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds(s => s > 0 ? s-1 : 0), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => { if (seconds === 0) setRunning(false); }, [seconds]);

  const mins = String(Math.floor(seconds/60)).padStart(2,"0");
  const secs = String(seconds%60).padStart(2,"0");

  return <div className="container page timer-page">
    <div className="page-heading"><span className="eyebrow">FOCUS MODE</span><h1>Study Timer</h1><p>Use the Pomodoro technique to focus on one task at a time.</p></div>
    <div className="timer-card">
      <div className="timer-circle"><span>{mins}:{secs}</span><small>FOCUS</small></div>
      <div className="timer-buttons">
        <button className="primary-button" onClick={()=>setRunning(!running)}>{running ? <Pause/> : <Play/>}{running ? "Pause" : "Start"}</button>
        <button className="secondary-button" onClick={()=>{setRunning(false);setSeconds(25*60)}}><RotateCcw/> Reset</button>
      </div>
      <div className="timer-presets">
        <button onClick={()=>{setRunning(false);setSeconds(25*60)}}>25 min</button>
        <button onClick={()=>{setRunning(false);setSeconds(45*60)}}>45 min</button>
        <button onClick={()=>{setRunning(false);setSeconds(60*60)}}>60 min</button>
      </div>
    </div>
  </div>
}