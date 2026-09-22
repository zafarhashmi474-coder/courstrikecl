/* =========================================================
   WORKSHOPS SECTION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LOCATION DROPDOWN
    ===================================================== */

    const locationSelector =
        document.getElementById("locationSelector");

    const locationDropdown =
        document.getElementById("locationDropdown");

    const selectedLocation =
        document.getElementById("selectedLocation");

    const selectedLocationFlag =
        document.getElementById("selectedLocationFlag");


    if (locationSelector && locationDropdown) {

        locationSelector.addEventListener("click", function (event) {

            event.stopPropagation();

            locationDropdown.classList.toggle("open");

        });


        const locationOptions =
            document.querySelectorAll(".location-option");


        locationOptions.forEach(function (option) {

            option.addEventListener("click", function (event) {

                event.preventDefault();

                const location =
                    option.dataset.location;

                const flag =
                    option.dataset.flag;


                selectedLocation.textContent =
                    location;

                selectedLocationFlag.textContent =
                    flag;


                locationOptions.forEach(function (item) {

                    item.classList.remove("active");

                });


                option.classList.add("active");

                locationDropdown.classList.remove("open");

            });

        });


        document.addEventListener("click", function () {

            locationDropdown.classList.remove("open");

        });

    }


    /* =====================================================
       SHOW MORE / SHOW LESS
    ===================================================== */

    const workshopsList =
        document.querySelector(".workshops-list");

    const showMoreBtn =
        document.getElementById("showMoreBtn");

    const showLessBtn =
        document.getElementById("showLessBtn");


    if (
        workshopsList &&
        showMoreBtn &&
        showLessBtn
    ) {


        showMoreBtn.addEventListener("click", function () {

            workshopsList.classList.add("expanded");


            /*
             * Scroll slightly so the newly opened
             * workshops become visible naturally.
             */

            setTimeout(function () {

                const firstHidden =
                    document.querySelector(".hidden-workshop");


                if (firstHidden) {

                    firstHidden.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });

                }

            }, 100);

        });


        showLessBtn.addEventListener("click", function () {

            workshopsList.classList.remove("expanded");


            /*
             * Return the user near the top
             * of the workshop list.
             */

            setTimeout(function () {

                workshopsList.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        });

    }

});