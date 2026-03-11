const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counters = document.querySelectorAll(".counter");

const animateCounter = (element) => {
  const target = Number(element.dataset.target);
  const duration = 1400;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);

    element.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  requestAnimationFrame(updateCounter);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const form = document.querySelector(".contact-form");

form?.addEventListener("submit", () => {
  const button = form.querySelector("button");
  button.textContent = "Sending...";
  button.disabled = true;
});

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelectorAll(".ambient").forEach((blob, index) => {
    const intensity = (index + 1) * 12;
    const moveX = (x - 0.5) * intensity;
    const moveY = (y - 0.5) * intensity;
    blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

});
