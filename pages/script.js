// function initCarousel() {
//   const containers = document.querySelectorAll(".gallery-container");

//   containers.forEach((container, index) => {
//     const track = container.querySelector(".image-track");
//     const prevBtn = container.querySelector(".prevBtn");
//     const nextBtn = container.querySelector(".nextBtn");
//     let currentIndex = 0;

//     const originalImages = Array.from(track.children);

//     // Clone images for smooth infinite scroll (clone 5 or 6 images depending on container)
//     const cloneCount = index === 0 ? 5 : 6;
//     for (let i = 0; i < cloneCount; i++) {
//       if (originalImages[i]) {
//         const clone = originalImages[i].cloneNode(true);
//         track.appendChild(clone);
//       }
//     }

//    function getImagesPerPage() {
//   const width = window.innerWidth;

//   if (index === 0) {
//     if (width <= 479) return 2;
//     if (width <= 767) return 3;
//     return 5;
//   } else {
//     if (width <= 347) return 2;
//     if (width <= 479) return 3;
//     if (width <= 767) return 4;
//     return 6;
//   }
// }


//     function updateTrackPosition(animate = true) {
//       const imagesPerPage = getImagesPerPage();
//       const images = Array.from(track.children);
//       const targetIndex = currentIndex * imagesPerPage;
//       if (!images[targetIndex]) return;
//       const targetOffset = images[targetIndex].offsetLeft;
//       track.style.transition = animate ? "transform 0.5s ease" : "none";
//       track.style.transform = `translateX(-${targetOffset}px)`;
//     }

//     nextBtn?.addEventListener("click", () => {
//       const imagesPerPage = getImagesPerPage();
//       const totalPages = Math.ceil(track.children.length / imagesPerPage);
//       currentIndex++;
//       updateTrackPosition(true);
//       if (currentIndex >= totalPages - 1) {
//         setTimeout(() => {
//           currentIndex = 0;
//           updateTrackPosition(false);
//         }, 500);
//       }
//     });

//     prevBtn?.addEventListener("click", () => {
//       const imagesPerPage = getImagesPerPage();
//       const totalPages = Math.ceil(track.children.length / imagesPerPage);
//       if (currentIndex === 0) {
//         currentIndex = totalPages - 2;
//         updateTrackPosition(false);
//         setTimeout(() => {
//           updateTrackPosition(true);
//           currentIndex--;
//         }, 20);
//       } else {
//         currentIndex--;
//         updateTrackPosition(true);
//       }
//     });

//     // Set initial position without animation
//     updateTrackPosition(false);

//     // Optional: Adjust on resize to keep correct position
//     window.addEventListener("resize", () => updateTrackPosition(false));
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   initCarousel();
// });



  function initCarousel() {
    document.querySelectorAll(".gallery-container").forEach(container => {
      const track = container.querySelector(".image-track");
      const prevBtn = container.querySelector(".prevBtn");
      const nextBtn = container.querySelector(".nextBtn");
      let currentIndex = 0;

      const originalImages = Array.from(track.children).slice(0, 12);
      for (let i = 0; i < 4; i++) {
        const clone = originalImages[i].cloneNode(true);
        track.appendChild(clone);
      }

      function getImagesPerPage() {
        const width = window.innerWidth;
        if (width <= 479) return 2;
        if (width <= 767) return 3;
        return 4;
      }

      function updateTrackPosition(animate = true) {
        const imagesPerPage = getImagesPerPage();
        const images = Array.from(track.children);
        const targetIndex = currentIndex * imagesPerPage;
        if (!images[targetIndex]) return;
        const targetOffset = images[targetIndex].offsetLeft;
        track.style.transition = animate ? "transform 0.5s ease" : "none";
        track.style.transform = `translateX(-${targetOffset}px)`;
      }

      nextBtn?.addEventListener("click", () => {
        const imagesPerPage = getImagesPerPage();
        const totalPages = Math.ceil(track.children.length / imagesPerPage);
        currentIndex++;
        updateTrackPosition(true);
        if (currentIndex >= totalPages - 1) {
          setTimeout(() => {
            currentIndex = 0;
            updateTrackPosition(false);
          }, 500);
        }
      });

      prevBtn?.addEventListener("click", () => {
        const imagesPerPage = getImagesPerPage();
        const totalPages = Math.ceil(track.children.length / imagesPerPage);
        if (currentIndex === 0) {
          currentIndex = totalPages - 2;
          updateTrackPosition(false);
          setTimeout(() => {
            updateTrackPosition(true);
            currentIndex--;
          }, 20);
        } else {
          currentIndex--;
          updateTrackPosition(true);
        }
      });

      window.addEventListener("resize", () => updateTrackPosition(false));
      window.addEventListener("load", () => updateTrackPosition(false));
    });
  }

// ========== Modal code ==========

function initModal() {
  const loginBtn = document.querySelector(".login-btn");
  const registerBtn = document.querySelector(".register-btn");

  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");

  if (!loginModal || !registerModal) {
    console.warn("Modals not found on this page");
    return;
  }

  const loginClose = loginModal.querySelector(".close");
  const registerClose = registerModal.querySelector(".register-close");

  const innerRegisterBtn = loginModal.querySelector(".inner-register-btn");
  const innerLoginBtn = registerModal.querySelector(".inner-login-btn");

  const switchToRegisterLink = document.getElementById("switchToRegister");
  const switchToLoginLink = document.getElementById("switchToLogin");

  if (loginBtn) loginBtn.addEventListener("click", showLoginModal);
  if (registerBtn) registerBtn.addEventListener("click", showRegisterModal);

  innerRegisterBtn?.addEventListener("click", showRegisterModal);
  innerLoginBtn?.addEventListener("click", showLoginModal);

  loginClose?.addEventListener("click", () => (loginModal.style.display = "none"));
  registerClose?.addEventListener("click", () => (registerModal.style.display = "none"));

  switchToRegisterLink?.addEventListener("click", (e) => {
    e.preventDefault();
    showRegisterModal();
  });

  switchToLoginLink?.addEventListener("click", (e) => {
    e.preventDefault();
    showLoginModal();
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === registerModal) registerModal.style.display = "none";
  });

 function showLoginModal() {
  registerModal.style.display = "none";
  loginModal.style.display = "block";

  // Target buttons inside login modal
  const loginBtn = loginModal.querySelector(".inner-login-btn");
  const registerBtn = loginModal.querySelector(".inner-register-btn");

  loginBtn?.classList.add("active");
  registerBtn?.classList.remove("active");
}

function showRegisterModal() {
  loginModal.style.display = "none";
  registerModal.style.display = "block";

  // Target buttons inside register modal
  const registerBtn = registerModal.querySelector(".inner-register-btn");
  const loginBtn = registerModal.querySelector(".inner-login-btn");

  registerBtn?.classList.add("active");
  loginBtn?.classList.remove("active");
}
}

 document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById("navbar-container");
    if (!navbarPlaceholder) {
      console.error("Navbar container not found");
      return;
    }

    fetch("../navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarPlaceholder.innerHTML = data;
        initModal(); // ✅ Wait until navbar is loaded, then attach modal event listeners
      })
      .catch((error) => console.error("Error loading navbar:", error));

    const footerPlaceholder = document.getElementById("footer-container");
    // if (!footerPlaceholder) {
    //   console.error("Footer container not found");
    //   return;
    // }

    fetch("../footer.html")
      .then((response) => response.text())
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      // .catch((error) => console.error("Error loading footer:", error));

    initCarousel();
  });

  


document.addEventListener("DOMContentLoaded", () => {
  // Existing navbar, footer, modal, carousel loading code ...
  // ...

  initCarousel();

  // Dropdown Toggle for Image Grid
 function setupToggle(toggleId, gridId) {
  const toggleIcon = document.getElementById(toggleId);
  const imageGrid = document.getElementById(gridId);

  toggleIcon.addEventListener('click', () => {
    const isHidden = imageGrid.classList.toggle('d-none'); // toggles show/hide
    if (isHidden) {
      toggleIcon.classList.remove('fa-caret-down');
      toggleIcon.classList.add('fa-caret-up');
    } else {
      toggleIcon.classList.remove('fa-caret-up');
      toggleIcon.classList.add('fa-caret-down');
    }
  });
}


setupToggle('toggleIcon1', 'imageGrid1');
setupToggle('toggleIcon2', 'imageGrid2');
setupToggle('toggleIcon3', 'imageGrid3');
setupToggle('toggleIcon4', 'imageGrid4');
setupToggle('toggleIcon5', 'imageGrid5');
setupToggle('toggleIcon6', 'imageGrid6');
setupToggle('toggleIcon7', 'imageGrid7');
setupToggle('toggleIcon8', 'imageGrid8');
setupToggle('toggleIcon9', 'imageGrid9');
setupToggle('toggleIcon10', 'imageGrid10');
setupToggle('toggleIcon11', 'imageGrid11');
setupToggle('toggleIcon12', 'imageGrid12');
setupToggle('toggleIcon13', 'imageGrid13');
setupToggle('toggleIcon14', 'imageGrid14');
setupToggle('toggleIcon15', 'imageGrid15');
setupToggle('toggleIcon16', 'imageGrid16');
setupToggle('toggleIcon17', 'imageGrid17');
setupToggle('toggleIcon18', 'imageGrid18');
setupToggle('toggleIcon19', 'imageGrid19');
setupToggle('toggleIcon20', 'imageGrid20');
setupToggle('toggleIcon21', 'imageGrid21');
setupToggle('toggleIcon22', 'imageGrid22');
setupToggle('toggleIcon23', 'imageGrid23');
setupToggle('toggleIcon24', 'imageGrid24');
setupToggle('toggleIcon25', 'imageGrid25');
setupToggle('toggleIcon26', 'imageGrid26');
setupToggle('toggleIcon27', 'imageGrid27');
setupToggle('toggleIcon28', 'imageGrid28');

});
