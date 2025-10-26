// Seletores
const links = document.querySelectorAll("nav ul li a");
const promo = document.querySelector(".promo"); 
const reviews = document.querySelector(".reviews"); 
const content = document.getElementById("main-content");

// Conteúdo dinâmico
const pages = {
  home: `
    <h2>🍔 Bem-vindo ao Robinho Lanches</h2>
    <p>O Robinho Lanches é o ponto de encontro da galera em <strong>Tietê, interior de São Paulo</strong>. 
    Aqui você encontra hambúrgueres artesanais, porções caprichadas e bebidas geladas num ambiente descontraído 
    e cheio de energia.</p>
    <p>Venha provar nossas especialidades e aproveitar promoções exclusivas toda semana. 
    O sabor que vai te deixar de boca aberta te espera aqui!</p>
    <button class="btn" id="btnCardapio">Ver Cardápio</button>
  `,
  cardapio: `
    <h2>📖 Nosso Cardápio</h2>
    <div class="menu-grid">
      <div class="menu-card"><img src="IMG/X-Pipoco.png" alt="X-Pipoco"><h3>X-Pipoco</h3><p>Explosão de sabores: carne, queijo, bacon e molho picante da casa.</p><span>R$ 22,90</span></div>
      <div class="menu-card"><img src="IMG/X-Ratão.png" alt="X-Ratão"><h3>X-Ratão</h3><p>Monstruoso: carne dupla, cheddar, cebola caramelizada e maionese temperada.</p><span>R$ 26,90</span></div>
      <div class="menu-card"><img src="IMG/X-Videos.png" alt="X-Vídeos"><h3>X-Vídeos</h3><p>Proibido para fracos: 2 carnes, 2 queijos, bacon, ovo e muito molho.</p><span>R$ 32,90</span></div>
      <div class="menu-card"><img src="IMG/XXX Burguertion.png" alt="XXX Burguertion"><h3>XXX Burguertion</h3><p>O mais insano do Robinho: 2 carnes monstruosas, muito queijo e folheado a ouro.</p><span>R$ 39,90</span></div>
      <div class="menu-card"><img src="IMG/Anaconda.png" alt="Anaconda"><h3>Anaconda</h3><p>Lanche gigante com muito frango, cebola, tomate e alface.</p><span>R$ 28,90</span></div>
      <div class="menu-card"><img src="IMG/Ronaldo.png" alt="Ronaldo"><h3>Sopa pa Nois</h3><p>Sopa a la carte típica na região da Indonésia.</p><span>R$ 29,90</span></div>
      <div class="menu-card"><img src="IMG/Lagartauum.png" alt="Lagartauum"><h3>Lagartauum</h3><p>Especial da casa: um hambúrguer em parceria com a lacoste.</p><span>R$ 27,90</span></div>
      <div class="menu-card"><img src="IMG/Coca.png" alt="Coca-Cola"><h3>Coca-Cola</h3><p>Clássica gelada 4 Litros.</p><span>R$ 6,00</span></div>
      <div class="menu-card"><img src="IMG/Molhos do Chefe.png" alt="Molhos do Chefe"><h3>Molhos do Chefe</h3><p>Kit de molhos especiais: Kechup, Molho do Chefe e Molho de Pimenta.</p><span>R$ 4,00</span></div>
    </div>
  `,
  reservas: `
    <h2>📅 Reservas</h2>
    <p>Garanta sua mesa e aproveite nossos lanches incríveis! Preencha o formulário abaixo:</p>
    <form class="form-reserva" id="formReserva">
      <input type="text" placeholder="Nome completo" required>
      <input type="tel" placeholder="Telefone" required>
      <input type="date" required>
      <input type="time" required>
      <select required>
        <option value="">Número de pessoas</option>
        <option>1 pessoa</option>
        <option>2 pessoas</option>
        <option>3 pessoas</option>
        <option>4 pessoas</option>
        <option>5 ou mais</option>
      </select>
      <button type="submit" class="btn">Confirmar Reserva</button>
    </form>
    <div class="reserva-info">
      <p>Ou reserve pelo WhatsApp: <strong>(15) 99760-9735</strong></p>
      <p>Horário de funcionamento: Seg-Sáb 11:00 - 23:00</p>
    </div>
  `,
  contato: `
    <h2>📞 Contato</h2>
    <p>Fale com a gente! Estamos disponíveis por WhatsApp, redes sociais e e-mail:</p>
    <div class="contato-cards">
      <div class="contato-card">
        <h3>💬 WhatsApp</h3>
        <p>Converse diretamente com nosso atendente</p>
        <a href="https://wa.me/5515997609735" target="_blank" class="btn">Chamar no Whats</a>
      </div>
      <div class="contato-card">
        <h3>📧 E-mail</h3>
        <p>Envie dúvidas ou sugestões</p>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" class="btn">Enviar E-mail</a>
      </div>
      <div class="contato-card">
        <h3>📱 Redes Sociais</h3>
        <p>Siga nossas promoções e novidades</p>
        <a href="https://www.instagram.com/robinholanchesofc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="btn">Visitar Instagram</a>
      </div>
    </div>
  `
};

// Função para trocar conteúdo com fade
function loadPage(targetId) {
  content.classList.add("fade-out");

  setTimeout(() => {
    // Sidebars
    if (targetId === "home") {
      promo.classList.remove("sidebar-left-hide");
      reviews.classList.remove("sidebar-right-hide");
      promo.classList.add("sidebar-left-show");
      reviews.classList.add("sidebar-right-show");
      content.classList.remove("content-expanded");
    } else {
      promo.classList.remove("sidebar-left-show");
      reviews.classList.remove("sidebar-right-show");
      promo.classList.add("sidebar-left-hide");
      reviews.classList.add("sidebar-right-hide");
      content.classList.add("content-expanded");
    }

    // Conteúdo
    content.innerHTML = pages[targetId];
    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    // Evento de submit do formulário de reservas
    const form = document.getElementById("formReserva");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        alert("🎉 Reserva confirmada! Entraremos em contato pelo telefone fornecido.");
        form.reset();
      });
    }

    // Evento botão "Ver Cardápio" na home
    const btnCardapio = document.getElementById("btnCardapio");
    if (btnCardapio) {
      btnCardapio.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        document.querySelector('a[href="#cardapio"]').classList.add("active");
        loadPage("cardapio");
        document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollBy(0, -100);
      });
    }

  }, 300);
}

// Evento nos links
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove("active"));
    e.target.classList.add("active");

    const targetId = e.target.getAttribute("href").replace("#", "");
    loadPage(targetId);

    document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -100);
  });
});

// 🔥 Carregar a Home automaticamente ao abrir o site
window.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});

console.log("🔥 Site do Robinho Lanches carregado com sucesso!");
