document.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.opacity = "1";
    }
  });
});
