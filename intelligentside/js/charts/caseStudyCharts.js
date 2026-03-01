export function initCaseStudyCharts(){
  const a = document.getElementById("caseChartA");
  const b = document.getElementById("caseChartB");
  if(!a || !b) return;

  new Chart(a, {
    type:"line",
    data:{
      labels:["Week 1","Week 2","Week 3","Week 4"],
      datasets:[{
        data:[38,44,50,55],
        tension:0.35,
        fill:true,
        backgroundColor:"rgba(32,227,178,0.14)",
        borderColor:"rgba(32,227,178,0.74)",
        borderWidth:2,
        pointRadius:3
      }]
    },
    options:{ scales:{ x:{ grid:{ display:false } }, y:{ beginAtZero:true, max:70 } } }
  });

  new Chart(b, {
    type:"bar",
    data:{
      labels:["Missed calls","Recovered","Booked"],
      datasets:[{
        data:[28,19,14],
        backgroundColor:"rgba(255,43,214,0.14)",
        borderColor:"rgba(255,43,214,0.66)",
        borderWidth:2,
        borderRadius:10,
        borderSkipped:false,
        barThickness: 30,
        maxBarThickness: 34
      }]
    },
    options:{ scales:{ x:{ grid:{ display:false } }, y:{ beginAtZero:true } } }
  });
}