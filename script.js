// ======== Mobile Menu Toggle ========
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  overlay.style.display = navLinks.classList.contains("open")
    ? "block"
    : "none";
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("open");
  overlay.style.display = "none";
});

// ======== Dark Mode Toggle ========
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.classList.add("dark-toggle");
document.querySelector(".navbar").appendChild(toggleBtn);

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add("dark-mode");
    toggleBtn.innerText = "☀️";
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    toggleBtn.innerText = "🌙";
    localStorage.setItem("darkMode", "disabled");
  }
}

// Load saved preference
if (localStorage.getItem("darkMode") === "enabled") {
  setDarkMode(true);
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setDarkMode(!isDark);
});

// ======== Typing Effect (Home only) ========
const typingElement = document.querySelector(".typing-text");
if (typingElement) {
  const text = typingElement.getAttribute("data-text") || "Welcome!";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
}

// ======== Fade-in on Scroll ========
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ======== Smooth Scroll for Anchor Links ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    // Close mobile nav if open
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    overlay.style.display = "none";
  });
});
        <h3>Sneha Kapoor</h3>
        <p>Marketing Manager</p>
      </div>
    </div>
  </section>

  <!-- 🔹 Timeline -->
  <section class="timeline fade-in">
    <h2>Our Journey</h2>
    <ul>
      <li><strong>2020:</strong> Founded Stock Operator with a vision to empower traders.</li>
      <li><strong>2021:</strong> Launched our first funding program.</li>
      <li><strong>2022:</strong> Crossed 10,000+ active traders.</li>
      <li><strong>2023:</strong> Expanded globally with multi-currency support.</li>
      <li><strong>2025:</strong> Leading the way in prop trading innovation.</li>
    </ul>
  </section>

  <!-- 🔹 Footer -->
  <footer>
    <p>&copy; 2025 Stock Operator. All rights reserved.</p>
  </footer>
</body>
</html>
