document.addEventListener("DOMContentLoaded", function () {

    const mainHeader =
        document.getElementById("header");

    const secondaryNav =
        document.getElementById("enterpriseSubnav");

    const whySection =
        document.getElementById("why-brainstation");


    /* =========================================
       MAIN HEADER → HIDE WHEN WHY SECTION ARRIVES
    ========================================= */

    if (
        mainHeader &&
        secondaryNav &&
        whySection
    ) {

        function updateMainHeader() {

            const navRect =
                secondaryNav.getBoundingClientRect();

            /*
                When secondary navigation reaches
                the top of the screen, hide main header.
            */

            if (navRect.top <= 0) {

                mainHeader.classList.add(
                    "enterprise-header-hidden"
                );

            } else {

                mainHeader.classList.remove(
                    "enterprise-header-hidden"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateMainHeader,
            { passive: true }
        );


        updateMainHeader();

    }


    /* =========================================
       SECONDARY NAV LINKS
    ========================================= */

    const navLinks =
        document.querySelectorAll(
            ".enterprise-nav-link"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    !targetId.startsWith("#")
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                navLinks.forEach(function (item) {

                    item.classList.remove(
                        "active"
                    );

                });


                link.classList.add("active");

            }
        );

    });


    /* =========================================
       ACTIVE NAV WHILE SCROLLING
    ========================================= */

    const sections = [

        document.getElementById(
            "why-brainstation"
        ),

        document.getElementById(
            "offerings"
        ),

        document.getElementById(
            "benefits"
        ),

        document.getElementById(
            "testimonials"
        ),

        document.getElementById(
            "locations"
        )

    ].filter(Boolean);


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const id =
                        entry.target.id;


                    navLinks.forEach(function (link) {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute("href") ===
                            "#" + id
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },

            {
                rootMargin:
                    "-25% 0px -65% 0px",

                threshold: 0
            }

        );


    sections.forEach(function (section) {

        observer.observe(section);

    });

});