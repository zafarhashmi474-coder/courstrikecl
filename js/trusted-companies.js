/* =========================================
   TRUSTED COMPANIES
   7 x 6 LOGO SLIDER
   42 LOGOS PER SLIDE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("trustedTrack");

    if (!track) return;


    /* =========================================
       ICONIFY CDN
    ========================================= */

    const CDN = "https://api.iconify.design/logos:";


    /* =========================================
       SCREEN 1
       EXACTLY 42 LOGOS
       7 COLUMNS x 6 ROWS
    ========================================= */

    const pageOne = [

        // ROW 1
        ["Adobe", "adobe"],
        ["Stripe", "stripe"],
        ["JPMorgan Chase", "jpmorganchase"],
        ["Walmart", "walmart"],
        ["Accenture", "accenture"],
        ["eBay", "ebay"],
        ["Spotify", "spotify"],

        // ROW 2
        ["SAP", "sap"],
        ["Salesforce", "salesforce"],
        ["Visa", "visa"],
        ["Uber", "uber"],
        ["Netflix", "netflix"],
        ["PayPal", "paypal"],
        ["IBM", "ibm"],

        // ROW 3
        ["American Express", "amex"],
        ["Microsoft", "microsoft"],
        ["Deloitte", "deloitte"],
        ["Square", "square"],
        ["Apple", "apple"],
        ["YouTube", "youtube"],
        ["LinkedIn", "linkedin"],

        // ROW 4
        ["TikTok", "tiktok"],
        ["Shopify", "shopify"],
        ["Samsung", "samsung"],
        ["Intuit", "intuit"],
        ["Anthropic", "anthropic"],
        ["Figma", "figma"],
        ["AMD", "amd"],

        // ROW 5
        ["Citi", "citi"],
        ["RBC", "rbc"],
        ["KPMG", "kpmg"],
        ["Slack", "slack"],
        ["Mozilla", "mozilla"],
        ["McKinsey", "mckinsey"],
        ["Expedia", "expedia"],

        // ROW 6
        ["McDonald's", "mcdonalds"],
        ["Morgan Stanley", "morgan-stanley"],
        ["Canva", "canva"],
        ["Nike", "nike"],
        ["Ogilvy", "ogilvy"],
        ["Monzo", "monzo"],
        ["Airbnb", "airbnb"]

    ];


    /* =========================================
       SCREEN 2
       EXACTLY 42 LOGOS
       7 COLUMNS x 6 ROWS
    ========================================= */

    const pageTwo = [

        // ROW 1
        ["Accenture", "accenture"],
        ["eBay", "ebay"],
        ["Spotify", "spotify"],
        ["Amazon", "amazon"],
        ["Oracle", "oracle"],
        ["Cisco", "cisco"],
        ["Adobe", "adobe"],

        // ROW 2
        ["Netflix", "netflix"],
        ["PayPal", "paypal"],
        ["IBM", "ibm"],
        ["NVIDIA", "nvidia"],
        ["OpenAI", "openai"],
        ["Meta", "meta"],
        ["SAP", "sap"],

        // ROW 3
        ["Apple", "apple"],
        ["YouTube", "youtube"],
        ["LinkedIn", "linkedin"],
        ["X", "x"],
        ["PwC", "pwc"],
        ["Lloyds Bank", "lloyds-bank"],
        ["American Express", "amex"],

        // ROW 4
        ["Anthropic", "anthropic"],
        ["Figma", "figma"],
        ["AMD", "amd"],
        ["EY", "ey"],
        ["Pinterest", "pinterest"],
        ["Mastercard", "mastercard"],
        ["TikTok", "tiktok"],

        // ROW 5
        ["Mozilla", "mozilla"],
        ["McKinsey", "mckinsey"],
        ["Expedia", "expedia"],
        ["Disney", "disney"],
        ["IKEA", "ikea"],
        ["Cohere", "cohere"],
        ["Citi", "citi"],

        // ROW 6
        ["Ogilvy", "ogilvy"],
        ["Monzo", "monzo"],
        ["Airbnb", "airbnb"],
        ["Barclays", "barclays"],
        ["Public", "public"],
        ["Intel", "intel"],
        ["McDonald's", "mcdonalds"]

    ];


    /* =========================================
       ALL PAGES
    ========================================= */

    const pages = [
        pageOne,
        pageTwo
    ];


    /* =========================================
       CREATE LOGO
    ========================================= */

    function createLogo(name, icon) {

        const logo = document.createElement("div");

        logo.className = "trusted-logo";


        const image = document.createElement("img");

        image.src = `${CDN}${icon}.svg`;

        image.alt = name;

        image.loading = "lazy";


        /*
            Keep every logo inside the same
            visual area.
        */

        image.draggable = false;


        logo.appendChild(image);

        return logo;
    }


    /* =========================================
       CREATE PAGE
    ========================================= */

    function createPage(logos) {

        const page = document.createElement("div");

        page.className = "trusted-page";


        logos.forEach(function (logoData) {

            const name = logoData[0];

            const icon = logoData[1];


            page.appendChild(
                createLogo(name, icon)
            );

        });


        return page;
    }


    /* =========================================
       BUILD ALL PAGES
    ========================================= */

    pages.forEach(function (logos) {

        const page = createPage(logos);

        track.appendChild(page);

    });


    /*
        Clone first page.

        This makes the transition smoother
        when the slider reaches the end.
    */

    const firstPage = track.children[0];

    const firstPageClone = firstPage.cloneNode(true);

    track.appendChild(firstPageClone);


    /* =========================================
       SLIDER
    ========================================= */

    let currentPage = 0;

    const totalPages = pages.length;


    function moveSlider() {

        currentPage++;


        /*
            Move to next complete 7x6 grid
        */

        track.style.transform =
            `translate3d(-${currentPage * 100}%, 0, 0)`;


        /*
            When we reach cloned first page,
            smoothly reset to the real first page.
        */

        if (currentPage === totalPages) {

            setTimeout(function () {

                track.style.transition = "none";

                currentPage = 0;

                track.style.transform =
                    "translate3d(0, 0, 0)";


                /*
                    Force browser reflow
                    before enabling transition again.
                */

                track.offsetHeight;


                track.style.transition =
                    "transform 1.8s ease-in-out";

            }, 1800);

        }

    }


    /* =========================================
       INITIAL TRANSITION
    ========================================= */

    track.style.transition =
        "transform 1.8s ease-in-out";


    /* =========================================
       AUTO SLIDE
       
       7 seconds per screen
       + 1.8 sec smooth movement
    ========================================= */

    setInterval(function () {

        moveSlider();

    }, 7000);

});