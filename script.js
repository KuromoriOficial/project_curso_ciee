// Menu fixo e animação suave
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Animações suaves de entrada
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section, .card, .help-card").forEach(el => observer.observe(el));

const baloes = document.querySelectorAll('.balao-produto');

baloes.forEach(balao => {
  // Posição inicial aleatória dentro da área de vendas
  const area = document.getElementById('area-vendas');
  const areaWidth = area.offsetWidth;
  const areaHeight = area.offsetHeight;

  balao.style.left = `${Math.random() * (areaWidth - 160)}px`;
  balao.style.top = `${Math.random() * (areaHeight - 180)}px`;

  let offsetX, offsetY, isDragging = false;

  balao.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    balao.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const rect = area.getBoundingClientRect();
      let x = e.clientX - rect.left - offsetX;
      let y = e.clientY - rect.top - offsetY;

      // Limita o movimento dentro da área de vendas
      x = Math.max(0, Math.min(x, area.offsetWidth - balao.offsetWidth));
      y = Math.max(0, Math.min(y, area.offsetHeight - balao.offsetHeight));

      balao.style.left = `${x}px`;
      balao.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    balao.style.zIndex = '';
  });
});
