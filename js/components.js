document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       LOAD HEADER
    ========================== */

    fetch("./components/header.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {

            document.getElementById("header").innerHTML = html;

            setupMobileMenu();
            setupLocationDropdown();
            setupWorkshopsMenu();
            setupEventsMenu();

        })
        .catch(function (error) {

            console.error(
                "Header loading error:",
                error
            );

        });


    /* ==========================
       LOAD FOOTER
    ========================== */

    fetch("./components/footer.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {

            document.getElementById("footer").innerHTML = html;

        })
        .catch(function (error) {

            console.error(
                "Footer loading error:",
                error
            );

        });

});


/* ==============================
   MOBILE MENU
================================ */

function setupMobileMenu() {

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.getElementById("navLinks");


    if (!menuButton || !navLinks) {
        return;
    }


    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "mobile-menu-open"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );

}



/* ==============================
   LOCATION DROPDOWN
================================ */

function setupLocationDropdown() {

    const locationButton =
        document.getElementById(
            "locationButton"
        );

    const locationDropdown =
        document.getElementById(
            "locationDropdown"
        );


    if (
        !locationButton ||
        !locationDropdown
    ) {
        return;
    }


    locationButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            locationDropdown.classList.toggle(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        function () {

            locationDropdown.classList.remove(
                "show"
            );

        }
    );

}

/* ==============================
   WORKSHOPS MEGA MENU
================================ */

function setupWorkshopsMenu() {

    const workshopsButton =
        document.getElementById(
            "workshopsButton"
        );

    const workshopsMenu =
        document.getElementById(
            "workshopsMegaMenu"
        );


    if (
        !workshopsButton ||
        !workshopsMenu
    ) {
        return;
    }


    /* ==========================
       OPEN / CLOSE
    ========================== */

    workshopsButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                workshopsMenu.classList.contains(
                    "show"
                );


            if (isOpen) {

                closeWorkshopsMenu();

            } else {

                workshopsMenu.classList.add(
                    "show"
                );

                workshopsButton.classList.add(
                    "active"
                );

                workshopsButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );


    /* ==========================
       PREVENT INSIDE CLICK
    ========================== */

    workshopsMenu.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    /* ==========================
       CLOSE OUTSIDE
    ========================== */

    document.addEventListener(
        "click",
        function () {

            closeWorkshopsMenu();

        }
    );


    /* ==========================
       ESCAPE KEY
    ========================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeWorkshopsMenu();

            }

        }
    );

    function closeWorkshopsMenu() {

        workshopsMenu.classList.remove(
            "show"
        );

        workshopsButton.classList.remove(
            "active"
        );

        workshopsButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}

/* =====================================================
   EVENTS MEGA MENU
===================================================== */

function setupEventsMenu() {

    const eventsButton =
        document.getElementById(
            "eventsButton"
        );

    const eventsMenu =
        document.getElementById(
            "eventsMegaMenu"
        );


    if (
        !eventsButton ||
        !eventsMenu
    ) {

        return;

    }


    /* =========================================
       OPEN / CLOSE
    ========================================== */

    eventsButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                eventsMenu.classList.contains(
                    "show"
                );


            if (isOpen) {

                closeEventsMenu();

            } else {

                eventsMenu.classList.add(
                    "show"
                );

                eventsButton.classList.add(
                    "active"
                );

                eventsButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );


    /* =========================================
       PREVENT POPUP CLICK FROM CLOSING
    ========================================== */

    eventsMenu.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    /* =========================================
       CLOSE OUTSIDE
    ========================================== */

    document.addEventListener(
        "click",
        function () {

            closeEventsMenu();

        }
    );


    /* =========================================
       ESCAPE
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeEventsMenu();

            }

        }
    );


    function closeEventsMenu() {

        eventsMenu.classList.remove(
            "show"
        );

        eventsButton.classList.remove(
            "active"
        );

        eventsButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}