document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("enterpriseForm");

    if (!form) return;


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const button =
            form.querySelector(".consultation-btn");


        const originalText =
            button.textContent;


        button.textContent =
            "Request Sent ✓";


        button.style.background =
            "#ffd400";


        button.style.color =
            "#090a0b";


        /*
            Reset after 3 seconds
        */

        setTimeout(function () {

            button.textContent =
                originalText;

            button.style.background =
                "";

            button.style.color =
                "";

        }, 3000);

    });

});