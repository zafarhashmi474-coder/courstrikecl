document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SMART PATH RESOLVER FOR SUBFOLDERS (e.g., /workshops/)
    ===================================================== */
    const isSubfolder = window.location.pathname.includes("/workshops/") || 
                        window.location.pathname.includes("/events/") ||
                        window.location.pathname.includes("/certifications/");

    const basePath = isSubfolder ? "../" : "./";

    /* ==========================
       LOAD HEADER
    ========================== */
    fetch(basePath + "components/header.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status + " while loading " + response.url);
            }
            return response.text();
        })
        .then(function (html) {

            const headerContainer = document.getElementById("header");
            if (!headerContainer) return;

            // If we are inside a subfolder, fix the relative links & image paths
            if (isSubfolder) {
                html = html
                    // Fix links to index & enterprise training
                    .replace(/href="index\.html"/g, 'href="../index.html"')
                    .replace(/href="enterprise-training\.html"/g, 'href="../enterprise-training.html"')
                    // Fix links pointing to workshops/ (strip the workshops/ prefix so they point to the current folder)
                    .replace(/href="workshops\//g, 'href="./')
                    // Fix image paths
                    .replace(/src="images\//g, 'src="../images/');
            }

            headerContainer.innerHTML = html;

            setupMobileMenu();
            setupLocationDropdown();
            setupWorkshopsMenu();
            setupEventsMenu();
            setupAboutMenu();
            setupCertificationsMenu();

        })
        .catch(function (error) {
            console.error("Header loading error:", error);
        });


    /* ==========================
       LOAD FOOTER
    ========================== */
    fetch(basePath + "components/footer.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status + " while loading " + response.url);
            }
            return response.text();
        })
        .then(function (html) {
            const footerContainer = document.getElementById("footer");
            if (!footerContainer) return;

            if (isSubfolder) {
                html = html
                    .replace(/href="index\.html"/g, 'href="../index.html"')
                    .replace(/src="images\//g, 'src="../images/');
            }

            footerContainer.innerHTML = html;
        })
        .catch(function (error) {
            console.error("Footer loading error:", error);
        });

});


/* ==============================
   MOBILE MENU
================================ */
function setupMobileMenu() {
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (!menuButton || !navLinks) return;

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("mobile-menu-open");
        menuButton.classList.toggle("active");
    });
}


/* ==============================
   LOCATION DROPDOWN
================================ */
function setupLocationDropdown() {
    const locationButton = document.getElementById("locationButton");
    const locationDropdown = document.getElementById("locationDropdown");

    if (!locationButton || !locationDropdown) return;

    locationButton.addEventListener("click", function (event) {
        event.stopPropagation();
        locationDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        locationDropdown.classList.remove("show");
    });
}


/* ==============================
   WORKSHOPS MEGA MENU
================================ */
function setupWorkshopsMenu() {
    const workshopsButton = document.getElementById("workshopsButton");
    const workshopsMenu = document.getElementById("workshopsMegaMenu");

    if (!workshopsButton || !workshopsMenu) return;

    workshopsButton.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = workshopsMenu.classList.contains("show");

        // Close other menus
        closeOtherMenus("workshops");

        if (isOpen) {
            closeWorkshopsMenu();
        } else {
            workshopsMenu.classList.add("show");
            workshopsButton.classList.add("active");
            workshopsButton.setAttribute("aria-expanded", "true");
        }
    });

    workshopsMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        closeWorkshopsMenu();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeWorkshopsMenu();
        }
    });

    function closeWorkshopsMenu() {
        workshopsMenu.classList.remove("show");
        workshopsButton.classList.remove("active");
        workshopsButton.setAttribute("aria-expanded", "false");
    }
}


/* =====================================================
   EVENTS MEGA MENU
===================================================== */
function setupEventsMenu() {
    const eventsButton = document.getElementById("eventsButton");
    const eventsMenu = document.getElementById("eventsMegaMenu");

    if (!eventsButton || !eventsMenu) return;

    eventsButton.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = eventsMenu.classList.contains("show");

        closeOtherMenus("events");

        if (isOpen) {
            closeEventsMenu();
        } else {
            eventsMenu.classList.add("show");
            eventsButton.classList.add("active");
            eventsButton.setAttribute("aria-expanded", "true");
        }
    });

    eventsMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        closeEventsMenu();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeEventsMenu();
        }
    });

    function closeEventsMenu() {
        eventsMenu.classList.remove("show");
        eventsButton.classList.remove("active");
        eventsButton.setAttribute("aria-expanded", "false");
    }
}


/* =====================================================
   ABOUT MEGA MENU
===================================================== */
function setupAboutMenu() {
    const aboutButton = document.getElementById("aboutButton");
    const aboutMenu = document.getElementById("aboutMegaMenu");

    if (!aboutButton || !aboutMenu) return;

    aboutButton.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = aboutMenu.classList.contains("show");

        closeOtherMenus("about");

        if (isOpen) {
            closeAboutMenu();
        } else {
            aboutMenu.classList.add("show");
            aboutButton.classList.add("active");
            aboutButton.setAttribute("aria-expanded", "true");
        }
    });

    aboutMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        closeAboutMenu();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeAboutMenu();
        }
    });

    function closeAboutMenu() {
        aboutMenu.classList.remove("show");
        aboutButton.classList.remove("active");
        aboutButton.setAttribute("aria-expanded", "false");
    }
}


/* =====================================================
   CERTIFICATIONS MEGA MENU
===================================================== */
function setupCertificationsMenu() {
    const certButton = document.getElementById("certificationsButton");
    const certMenu = document.getElementById("certificationsMegaMenu");

    if (!certButton || !certMenu) return;

    certButton.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = certMenu.classList.contains("show");

        closeOtherMenus("certifications");

        if (isOpen) {
            closeCertMenu();
        } else {
            certMenu.classList.add("show");
            certButton.classList.add("active");
            certButton.setAttribute("aria-expanded", "true");
        }
    });

    certMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        closeCertMenu();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeCertMenu();
        }
    });

    function closeCertMenu() {
        certMenu.classList.remove("show");
        certButton.classList.remove("active");
        certButton.setAttribute("aria-expanded", "false");
    }
}


/* Helper to close other menus */
function closeOtherMenus(except) {
    const menus = {
        workshops: { menu: document.getElementById("workshopsMegaMenu"), btn: document.getElementById("workshopsButton") },
        events: { menu: document.getElementById("eventsMegaMenu"), btn: document.getElementById("eventsButton") },
        about: { menu: document.getElementById("aboutMegaMenu"), btn: document.getElementById("aboutButton") },
        certifications: { menu: document.getElementById("certificationsMegaMenu"), btn: document.getElementById("certificationsButton") }
    };

    for (let key in menus) {
        if (key !== except && menus[key].menu && menus[key].btn) {
            menus[key].menu.classList.remove("show");
            menus[key].btn.classList.remove("active");
            menus[key].btn.setAttribute("aria-expanded", "false");
        }
    }
}