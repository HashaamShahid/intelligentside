function rand(min,max){ return Math.round(min + Math.random()*(max-min)); }

export function initKpiTicker(){
  const r = document.getElementById("kpiResponse");
  const b = document.getElementById("kpiBookings");
  const l = document.getElementById("kpiLost");
  if(!r || !b || !l) return;

  let tick = 42;
  setInterval(()=>{
    tick = Math.max(18, Math.min(58, tick + (Math.random()>0.5?1:-1)));
    const mm = Math.floor(tick/60);
    const ss = String(tick%60).padStart(2,"0");
    r.textContent = `${String(mm).padStart(2,"0")}:${ss}`;
    b.textContent = `+${rand(18,29)}%`;
    l.textContent = `-${rand(18,38)}%`;
  }, 2600);
}