(function () {

  const btn = document.createElement("div");
  btn.className = "back-btn";

  btn.innerHTML = `
    <i class="fa-solid fa-arrow-left"></i>
    
  `;

  btn.onclick = function () {

    // BEST SAFE BACK LOGIC
    if (document.referrer && document.referrer !== "") {
      window.history.back();
    } else {
      // fallback page (admin safe page)
      window.location.href = "dashboard.html";
    }

  };

  document.body.appendChild(btn);

})();