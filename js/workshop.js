/* =========================================================
   WORKSHOP CONTROLLERS (Location Dropdown + Sticky Nav)
   File Path: js/workshop.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. LOCATION DROPDOWN
    ===================================================== */
    const locationSelector = document.getElementById("locationSelector");
    const locationDropdown = document.getElementById("locationDropdown");
    const selectedLocation = document.getElementById("selectedLocation");
    const selectedLocationFlag = document.getElementById("selectedLocationFlag");

    if (locationSelector && locationDropdown) {
        locationSelector.addEventListener("click", function (event) {
            event.stopPropagation();
            locationDropdown.classList.toggle("open");
        });

        const locationOptions = document.querySelectorAll(".location-option");
        locationOptions.forEach(function (option) {
            option.addEventListener("click", function (event) {
                event.preventDefault();
                if (selectedLocation) selectedLocation.textContent = option.dataset.location;
                if (selectedLocationFlag) selectedLocationFlag.textContent = option.dataset.flag;

                locationOptions.forEach(item => item.classList.remove("active"));
                option.classList.add("active");
                locationDropdown.classList.remove("open");
            });
        });

        document.addEventListener("click", function () {
            locationDropdown.classList.remove("open");
        });
    }

    /* =====================================================
       2. SHOW MORE / SHOW LESS
    ===================================================== */
    const workshopsList = document.querySelector(".workshops-list");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");

    if (workshopsList && showMoreBtn && showLessBtn) {
        showMoreBtn.addEventListener("click", function () {
            workshopsList.classList.add("expanded");
        });
        showLessBtn.addEventListener("click", function () {
            workshopsList.classList.remove("expanded");
            workshopsList.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    /* =====================================================
       3. MAIN HEADER HIDE WHEN SECONDARY NAV REACHES TOP
       (Exact pattern as enterprise-training.js)
    ===================================================== */
    const mainHeader = document.getElementById("header");
    const secondaryNav = document.getElementById("workshopSubnav");
    const overviewSection = document.getElementById("overview");

    if (mainHeader && secondaryNav && overviewSection) {

        function updateMainHeader() {
            const navRect = secondaryNav.getBoundingClientRect();

            // When secondary navigation reaches top of the screen (0px), hide main header
            if (navRect.top <= 0) {
                mainHeader.classList.add("workshop-header-hidden");
            } else {
                mainHeader.classList.remove("workshop-header-hidden");
            }
        }

        window.addEventListener("scroll", updateMainHeader, { passive: true });
        updateMainHeader();
    }

    /* =====================================================
       4. SECONDARY NAV SMOOTH SCROLL LINKS
    ===================================================== */
    const navLinks = document.querySelectorAll(".workshop-nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    /* =====================================================
       5. ACTIVE NAV ON SCROLL (IntersectionObserver)
    ===================================================== */
    const sections = [
        document.getElementById("overview"),
        document.getElementById("curriculum"),
        document.getElementById("testimonials"),
    document.getElementById("our-space"),
    document.getElementById("faq")
    ].filter(Boolean);

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                const id = entry.target.id;

                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            });
        },
        {
            rootMargin: "-25% 0px -65% 0px",
            threshold: 0
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});

/* =====================================================
   6. FAQ ACCORDION CONTROLLER
===================================================== */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
    const questionBtn = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    questionBtn.addEventListener("click", function () {
        const isOpen = item.classList.contains("active");

        // Bija badha FAQs ne bandh karva mate:
        faqItems.forEach(function (otherItem) {
            otherItem.classList.remove("active");
            const otherIcon = otherItem.querySelector(".faq-icon");
            if (otherIcon) otherIcon.textContent = "+";
        });

        // Click karela FAQ ne toggle karo:
        if (!isOpen) {
            item.classList.add("active");
            if (icon) icon.textContent = "−";
        } else {
            item.classList.remove("active");
            if (icon) icon.textContent = "+";
        }
    });
});