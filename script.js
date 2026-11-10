
// Mengambil elemen menu navigasi
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");


// Membuka dan menutup menu pada tampilan HP
menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Menutup menu setelah tautan navigasi dipilih
navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// Mengambil semua bagian halaman
const sections = document.querySelectorAll("main section[id]");


// Mengatur navigasi aktif berdasarkan bagian yang terlihat
const sectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navItems.forEach((item) => {

                    item.classList.toggle(

                        "active",

                        item.getAttribute("href") === `#${entry.target.id}`

                    );

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


// Mengamati setiap bagian halaman
sections.forEach((section) => {

    sectionObserver.observe(section);

});


// Menampilkan tahun secara otomatis pada footer
document.getElementById("year").textContent =
    new Date().getFullYear();