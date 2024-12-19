
    // Toggle the mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});



// Close Dropdown Menu When Clicking Outside
document.addEventListener("click", (e) => {
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  const navItems = document.querySelectorAll(".nav-item.dropdown");

  navItems.forEach((item) => {
    const dropdownMenu = item.querySelector(".dropdown-menu");
    if (!item.contains(e.target)) {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  });
});

// Smooth Scrolling for Internal Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dropdown Animation on Click
const dropdownLinks = document.querySelectorAll(".nav-link");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const dropdownMenu = link.nextElementSibling;
    dropdownMenu.classList.toggle("visible");
  });
});

// Sidebar Toggle
const menuToggles = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

menuToggles.addEventListener('click', () => {
  sidebar.style.right = '0';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.right = '-300px';
});

// Dropdown Menu on Navbar
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    const dropdownMenu = document.getElementById(`${e.target.dataset.dropdown}-menu`);
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
});


