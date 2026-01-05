function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// optional animation on player cards on scroll
const players = document.querySelectorAll('.player-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('enter');
    }
  });
});
players.forEach(card => observer.observe(card));
