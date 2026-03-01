export function initCursorGlow(){
  const glow = document.getElementById("glow");
  if(!glow) return;
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive:true });
}