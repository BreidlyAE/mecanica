document.addEventListener("DOMContentLoaded", () => {
    // Animación del footer al cargar
    const footer = document.querySelector("footer");
    footer.style.opacity = 0;
    footer.style.transform = "translateY(50px)";
    setTimeout(() => {
      footer.style.transition = "all 1s ease-in-out";
      footer.style.opacity = 1;
      footer.style.transform = "translateY(0)";
    }, 500);
  
    // Animación de las cajas al cargar
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, index) => {
      box.style.opacity = 0;
      box.style.transform = "scale(0.8)";
      setTimeout(() => {
        box.style.transition = "all 0.8s ease-in-out";
        box.style.opacity = 1;
        box.style.transform = "scale(1)";
      }, 300 * index); // Delay escalonado para cada caja
    });
  
    // Animación al hacer clic en cada caja
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            box.style.transition = "background 0.5s ease";
            box.style.background = "linear-gradient(to right, rgb(51, 51, 51), #fff)";
            setTimeout(() => {
              box.style.background = "#fff";
            }, 500);
          });
    });
  });
      
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nave ul");
  
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  
    // Efecto para resaltar "SERVICIOS"
    const activeLink = document.querySelector('.nave ul li a.active');
    if (activeLink) {
      activeLink.style.color = "#f39c12"; // Color especial
    }
  });
  