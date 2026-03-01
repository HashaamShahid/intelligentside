export function initAuditForm(){
  const form = document.getElementById("auditForm");
  const msg = document.getElementById("formMsg");
  if(!form || !msg) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    msg.textContent = "Request captured (demo). Hook this to an endpoint later.";
    msg.style.color = "rgba(32,227,178,0.85)";
    form.reset();
    setTimeout(()=>{ msg.textContent=""; }, 4500);
  });
}