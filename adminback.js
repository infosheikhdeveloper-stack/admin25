/* =========================
C25 ADMIN BACKGROUND EFFECT
Floating Icons + Glow Particles
========================= */

(function () {
  const icons = [
    "fa-cart-shopping",
    "fa-box",
    "fa-users",
    "fa-bag-shopping",
    "fa-indian-rupee-sign",
    "fa-truck",
    "fa-credit-card",
    "fa-bell",
    "fa-chart-line",
    "fa-store"
  ];

  const colors = ["#ff8c00", "#ff6200", "#ffffff"];

  // Create style
  const style = document.createElement("style");
  style.innerHTML = `
    .bg-icon{
      position:fixed;
      font-size:22px;
      opacity:0.08;
      z-index:0;
      pointer-events:none;
      animation:floatMove linear infinite;
      filter:drop-shadow(0 0 10px rgba(255,140,0,0.3));
    }

    @keyframes floatMove{
      0%{
        transform:translateY(0) rotate(0deg);
      }
      50%{
        transform:translateY(-80px) rotate(180deg);
      }
      100%{
        transform:translateY(0) rotate(360deg);
      }
    }

    .bg-dot{
      position:fixed;
      width:6px;
      height:6px;
      background:#ff8c00;
      border-radius:50%;
      opacity:0.15;
      z-index:0;
      animation:dotMove linear infinite;
    }

    @keyframes dotMove{
      0%{transform:translateY(0);}
      50%{transform:translateY(-120px);}
      100%{transform:translateY(0);}
    }
  `;
  document.head.appendChild(style);

  // ICONS
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("i");

    el.className =
      "fa-solid " +
      icons[Math.floor(Math.random() * icons.length)] +
      " bg-icon";

    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = 14 + Math.random() * 28 + "px";
    el.style.animationDuration = 6 + Math.random() * 10 + "s";
    el.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(el);
  }

  // DOT PARTICLES
  for (let i = 0; i < 40; i++) {
    const dot = document.createElement("div");
    dot.className = "bg-dot";

    dot.style.left = Math.random() * 100 + "vw";
    dot.style.top = Math.random() * 100 + "vh";
    dot.style.animationDuration = 5 + Math.random() * 10 + "s";

    document.body.appendChild(dot);
  }
})();