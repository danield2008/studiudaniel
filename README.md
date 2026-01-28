<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Studiu Daniel</title>
  <meta name="description" content="StudioName — Estudio de grabación y producción." />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css_styles_Version4.css">
</head>
<body>
  <header class="header">
    <div class="wrap">
      <a class="logo" href="#">Studiu Daniel</a>
      <button id="menu-btn" class="menu-btn" aria-label="Abrir menú">☰</button>
      <nav id="nav" class="nav" aria-label="Navegación principal">
        <a href="#services">Servicios</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact" class="btn">Reservar</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="wrap hero-inner">
        <div class="hero-left">
          <h1>Studiu Daniel</h1>
          <p class="lead"> Bună ziua,</p>
          <p>Mă numesc Daniel, sunt un tânăr de 17 ani, iar pasiunile mele sunt muzica, fotografia și videografia. Întrucât îmi dezvolt aceste abilități, doresc să le folosesc și să le perfecționez pentru slava și lauda lui Dumnezeu.

Vă mulțumesc pentru sprijinul</p>
          <div class="actions">
            <a href="#contact" class="btn">Reservar sesión</a>
            <button id="play" class="btn ghost">▶ Escuchar demo</button>
          </div>
        </div>
        <div class="stats">
          <div><strong>50</strong><span>Negative</span></div>
          <div><strong>2</strong><span>salas</span></div>
          <div><strong>40+</strong><span>proyectos</span></div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="wrap">
        <h2>Servicios</h2>
        <div class="grid">
          <div class="card">Grabación vocal e instrumentos</div>
          <div class="card">Mezcla y master profesional</div>
          <div class="card">Producción y arreglo musical</div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="section alt">
      <div class="wrap">
        <h2>Portfolio</h2>
        <div class="grid-2">
          <div class="work">Proyecto A — Audio</div>
          <div class="work">Proyecto B — Audio</div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="wrap">
        <h2>Contacto</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
          <input name="name" type="text" placeholder="Nombre" required>
          <input name="email" type="email" placeholder="Email" required>
          <textarea name="message" rows="4" placeholder="Mensaje / Fecha preferida" required></textarea>
          <button class="btn" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap">
      <p>© <span id="year"></span> Studiu Daniel — Todos los derechos reservados.</p>
    </div>
  </footer>

  <!-- Audio: coloca tu demo en assets/demo.mp3 -->
  <audio id="demo-audio" src="demo.mp3" preload="none"></audio>

  <script src="js/main.js"></script>
</body>
</html>
---

**Autor:** Daniel 
**Última actualización:** 2026
