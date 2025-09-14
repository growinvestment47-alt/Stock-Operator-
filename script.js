// ====== Dark Mode Toggle with localStorage ======
const toggleBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (toggleBtn) toggleBtn.checked = true;
}
if (toggleBtn) {
  toggleBtn.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

// ====== Mobile Menu Toggle ======
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// ====== Typing Effect (Home Page only) ======
const typingElement = document.getElementById("typing-text");
if (typingElement) {
  const typingPhrases = ["We Fund.", "You Trade.", "We Grow Together."];
  let phraseIndex = 0, letterIndex = 0, isDeleting = false;

  function typeEffect() {
    let currentPhrase = typingPhrases[phraseIndex];
    if (!isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      if (letterIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      typingElement.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      if (letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
  typeEffect();
}

// ====== Fade-in on Scroll ======
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
  const appearOptions = { threshold: 0.3 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));
}

// ====== Stats Counter Animation (Home Page only) ======
const counters = document.querySelectorAll('.counter');
const statsSection = document.getElementById("stats");
let statsPlayed = false;

function animateCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 200);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

if (statsSection) {
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsPlayed) {
        animateCounters();
        statsPlayed = true;
      }
    });
  }, { threshold: 0.5 });
  statsObserver.observe(statsSection);
}

// ====== Smooth Scroll for Internal Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ====== Contact Form (demo only) ======
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
