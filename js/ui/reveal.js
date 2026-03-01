export function initReveal(){
  const els = Array.from(document.querySelectorAll(".reveal"));
  if(!els.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.classList.add("on");
    });
  }, { threshold: 0.12 });

  els.forEach(el=>io.observe(el));
}