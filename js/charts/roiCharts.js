function fmt(n){ return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

export function initRoiCharts(){
  const leadsEl = document.getElementById("leads");
  const jobEl = document.getElementById("jobValue");
  const rateEl = document.getElementById("bookRate");
  const upEl = document.getElementById("uplift");
  const speedEl = document.getElementById("speed");

  const extraJobsEl = document.getElementById("extraJobs");
  const extraRevEl = document.getElementById("extraRev");
  const extraYearEl = document.getElementById("extraYear");

  const chartEl = document.getElementById("roiChart");
  const btn = document.getElementById("calcBtn");

  if(!chartEl || !leadsEl || !jobEl || !rateEl || !upEl || !speedEl) return;

  const chart = new Chart(chartEl, {
    type:"line",
    data:{
      labels:["M1","M2","M3","M4","M5","M6"],
      datasets:[{
        data:[0,0,0,0,0,0],
        tension:0.35,
        fill:true,
        backgroundColor:"rgba(106,92,255,0.18)",
        borderColor:"rgba(106,92,255,0.74)",
        borderWidth:2,
        pointRadius:3
      }]
    },
    options:{ scales:{ x:{ grid:{ display:false } }, y:{ beginAtZero:true } } }
  });

  const recalc = () => {
    const leads = Math.max(1, Number(leadsEl.value || 0));
    const jobValue = Math.max(0, Number(jobEl.value || 0));
    const baseRate = Math.min(100, Math.max(0, Number(rateEl.value || 0)));
    const uplift = Math.min(80, Math.max(0, Number(upEl.value || 0)));
    const speed = Number(speedEl.value || 0);

    const speedBonus = (speed/100) * 6;
    const newRate = Math.min(95, baseRate + uplift + speedBonus);

    const baseJobs = leads * (baseRate/100);
    const newJobs = leads * (newRate/100);

    const extraJobs = Math.max(0, newJobs - baseJobs);
    const extraRev = extraJobs * jobValue;
    const extraYear = extraRev * 12;

    if(extraJobsEl) extraJobsEl.textContent = "+" + Math.round(extraJobs);
    if(extraRevEl) extraRevEl.textContent = "$" + fmt(extraRev);
    if(extraYearEl) extraYearEl.textContent = "$" + fmt(extraYear);

    const ramp = [1,2,3,4,5,6].map(m => Math.round(extraRev * (0.55 + 0.10*m)));
    chart.data.datasets[0].data = ramp;
    chart.update();
  };

  btn?.addEventListener("click", recalc);
  [leadsEl, jobEl, rateEl, upEl, speedEl].forEach(x => x.addEventListener("input", recalc));
  recalc();
}