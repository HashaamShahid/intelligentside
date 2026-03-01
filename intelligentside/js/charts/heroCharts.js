import { heroData } from "../data/demoData.js";

export function initHeroCharts(){
  const el = document.getElementById("heroChart");
  if(!el) return;

  let chart;

  const build = (mode) => {
    const d = heroData[mode];
    const isLine = mode === "revenue";

    if(chart) chart.destroy();

    chart = new Chart(el, {
      type: isLine ? "line" : "bar",
      data: {
        labels: d.labels,
        datasets: [{
          label: isLine ? "Revenue ($)" : "Leads",
          data: d.values,
          tension: 0.35,
          fill: isLine,
          backgroundColor: isLine ? "rgba(106,92,255,0.18)" : "rgba(32,227,178,0.16)",
          borderColor: isLine ? "rgba(106,92,255,0.75)" : "rgba(32,227,178,0.72)",
          borderWidth: 2,
          pointRadius: isLine ? 3 : 0,
          borderRadius: isLine ? 0 : 10,
          barThickness: isLine ? undefined : 30,
          maxBarThickness: isLine ? undefined : 34,
          borderSkipped: false
        }]
      },
      options: {
        responsive:true,
        maintainAspectRatio:false,
        scales:{
          x:{ grid:{ display:false } },
          y:{ beginAtZero:true }
        }
      }
    });
  };

  build("pipeline");

  document.querySelectorAll("[data-hero-tab]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll("[data-hero-tab]").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      build(btn.dataset.heroTab);
    });
  });
}