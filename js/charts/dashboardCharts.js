function r(min,max){ return Math.round(min + Math.random()*(max-min)); }

export function initDashboardCharts(){
  const a = document.getElementById("dashChartA");
  const b = document.getElementById("dashChartB");
  const badge = document.getElementById("badgeMode");
  const shuffle = document.getElementById("shuffle");
  if(!a || !b || !badge) return;

  let chartA, chartB;

  const modes = {
    pipeline(){
      return {
        badge:"Mode: Pipeline",
        A:{ type:"bar", labels:["New","Contacted","Quoted","Booked"], data:[r(35,70), r(22,55), r(12,34), r(10,28)], label:"Leads" },
        B:{ type:"doughnut", labels:["Booked","Not booked"], data:[r(18,32), r(42,68)], center:{ title:"Booked", value:"32%" } }
      };
    },
    speed(){
      return {
        badge:"Mode: Speed",
        A:{ type:"line", labels:["W1","W2","W3","W4"], data:[r(7,20), r(4,12), r(1,6), r(0,3)], label:"Avg response (min)" },
        B:{ type:"bar", labels:["0-1m","1-5m","5-15m","15m+"], data:[r(35,55), r(15,28), r(8,18), r(3,12)], label:"Lead buckets" }
      };
    },
    revenue(){
      return {
        badge:"Mode: Revenue",
        A:{ type:"line", labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"], data:[r(1200,2400), r(1100,2600), r(900,2400), r(1500,3100), r(1700,3300), r(1200,2700), r(1000,2400)], label:"Revenue ($)" },
        B:{ type:"bar", labels:["Recovered","Organic","Paid"], data:[r(400,1200), r(700,1800), r(600,1600)], label:"Attribution ($)" }
      };
    },
    quality(){
      return {
        badge:"Mode: Lead Quality",
        A:{ type:"bar", labels:["Emergency","Install","Repair","Maintenance"], data:[r(14,32), r(10,26), r(20,46), r(8,20)], label:"Leads" },
        B:{ type:"line", labels:["Low","Mid","High"], data:[r(18,30), r(28,48), r(42,65)], label:"Booking rate (%)" }
      };
    }
  };

  const build = (modeKey) => {
    const pack = modes[modeKey]();
    badge.textContent = pack.badge;

    if(chartA) chartA.destroy();
    if(chartB) chartB.destroy();

    chartA = new Chart(a, {
      type: pack.A.type,
      data: {
        labels: pack.A.labels,
        datasets: [{
          label: pack.A.label,
          data: pack.A.data,
          tension: 0.35,
          fill: pack.A.type === "line",
          backgroundColor: "rgba(106,92,255,0.18)",
          borderColor: "rgba(106,92,255,0.75)",
          borderWidth: 2,
          pointRadius: pack.A.type === "line" ? 3 : 0,
          borderRadius: pack.A.type === "bar" ? 10 : 0,
          barThickness: pack.A.type === "bar" ? 30 : undefined,
          maxBarThickness: pack.A.type === "bar" ? 34 : undefined,
          borderSkipped: false
        }]
      },
      options: { plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:false } }, y:{ beginAtZero:true } } }
    });

    chartB = new Chart(b, {
      type: pack.B.type,
      data: {
        labels: pack.B.labels,
        datasets: [{
          label: "Split",
          data: pack.B.data,
          backgroundColor: [
            "rgba(32,227,178,0.22)",
            "rgba(255,43,214,0.14)",
            "rgba(106,92,255,0.16)",
            "rgba(255,204,102,0.16)"
          ],
          borderColor: "rgba(255,255,255,0.10)",
          borderWidth: 1.2,
          borderRadius: pack.B.type === "bar" ? 10 : 0,
          borderSkipped: false
        }]
      },
      options: {
        cutout: pack.B.type === "doughnut" ? "72%" : undefined,
        plugins: {
          centerText: pack.B.center ? pack.B.center : undefined,
          legend:{ display:false }
        },
        scales: pack.B.type === "bar" ? { x:{ grid:{ display:false } }, y:{ beginAtZero:true } } : {}
      }
    });
  };

  build("pipeline");

  document.querySelectorAll("[data-dash-tab]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll("[data-dash-tab]").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      build(btn.dataset.dashTab);
    });
  });

  if(shuffle){
    shuffle.addEventListener("click", ()=>{
      const active = document.querySelector("[data-dash-tab].active");
      build(active ? active.dataset.dashTab : "pipeline");
    });
  }
}