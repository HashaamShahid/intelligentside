export function initModal(){
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  if(!modal || !openBtn || !closeBtn) return;

  const open = () => { modal.style.display = "block"; modal.setAttribute("aria-hidden","false"); };
  const close = () => { modal.style.display = "none"; modal.setAttribute("aria-hidden","true"); };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e)=>{ if(e.target === modal) close(); });
}