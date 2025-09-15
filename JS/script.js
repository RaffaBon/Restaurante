// Ativar link atual no menu + scroll suave
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // evita pular direto
    document.querySelectorAll("nav ul li a").forEach(l => l.classList.remove("active"));
    e.target.classList.add("active");

    // Scroll suave até a seção
    const targetId = e.target.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

console.log("🔥 Site do Robinho Lanches carregado com sucesso!");
