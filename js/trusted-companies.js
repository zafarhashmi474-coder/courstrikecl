/* =========================================
   TRUSTED COMPANIES
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("trustedTrack");

    if (!track) return;



    const pageOne = [
        // ROW 1
        ["Adobe", "adobe-icon", "adobe"],
        ["Stripe", "stripe", "stripe"],
        ["JPMorgan Chase", "jpmorgan", "jpmorganchase"],
        ["Walmart", "walmart-icon", "walmart"],
        ["Accenture", "accenture-icon", "accenture"],
        ["eBay", "ebay", "ebay"],
        ["Spotify", "spotify-icon", "spotify"],

        // ROW 2
        ["SAP", "sap", "sap"],
        ["Salesforce", "salesforce", "salesforce"],
        ["Visa", "visa", "visa"],
        ["Uber", "uber", "uber"],
        ["Netflix", "netflix-icon", "netflix"],
        ["PayPal", "paypal", "paypal"],
        ["IBM", "ibm", "ibm"],

        // ROW 3
        ["American Express", "american-express", "americanexpress"],
        ["Microsoft", "microsoft-icon", "microsoft"],
        ["Deloitte", "deloitte-icon", "deloitte"],
        ["Square", "square-icon", "square"],
        ["Apple", "apple", "apple"],
        ["YouTube", "youtube-icon", "youtube"],
        ["LinkedIn", "linkedin-icon", "linkedin"],

        // ROW 4
        ["TikTok", "tiktok-icon", "tiktok"],
        ["Shopify", "shopify", "shopify"],
        ["Samsung", "samsung", "samsung"],
        ["Intuit", "intuit", "intuit"],
        ["Anthropic", "anthropic-icon", "anthropic"],
        ["Figma", "figma", "figma"],
        ["AMD", "amd-icon", "amd"],

        // ROW 5
        ["Citi", "citi", "citi"],
        ["RBC", "royal-bank-of-canada", "rbc"],
        ["KPMG", "kpmg", "kpmg"],
        ["Slack", "slack-icon", "slack"],
        ["Mozilla", "mozilla-icon", "mozilla"],
        ["McKinsey", "mckinsey-and-company", "mckinseyandcompany"],
        ["Expedia", "expedia-icon", "expedia"],

        // ROW 6
        ["McDonald's", "mcdonalds-icon", "mcdonalds"],
        ["Morgan Stanley", "morgan-stanley", "morganstanley"],
        ["Canva", "canva-icon", "canva"],
        ["Nike", "nike", "nike"],
        ["Ogilvy", "ogilvy", "ogilvy"],
        ["Monzo", "monzo-icon", "monzo"],
        ["Airbnb", "airbnb-icon", "airbnb"]
    ];


    /* =========================================
       SCREEN 2 (EXACTLY 42 LOGOS)
    ========================================= */

    const pageTwo = [
        // ROW 1
        ["Accenture", "accenture-icon", "accenture"],
        ["eBay", "ebay", "ebay"],
        ["Spotify", "spotify-icon", "spotify"],
        ["Amazon", "amazon-icon", "amazon"],
        ["Oracle", "oracle", "oracle"],
        ["Cisco", "cisco", "cisco"],
        ["Adobe", "adobe-icon", "adobe"],

        // ROW 2
        ["Netflix", "netflix-icon", "netflix"],
        ["PayPal", "paypal", "paypal"],
        ["IBM", "ibm", "ibm"],
        ["NVIDIA", "nvidia", "nvidia"],
        ["OpenAI", "openai-icon", "openai"],
        ["Meta", "meta-icon", "meta"],
        ["SAP", "sap", "sap"],

        // ROW 3
        ["Apple", "apple", "apple"],
        ["YouTube", "youtube-icon", "youtube"],
        ["LinkedIn", "linkedin-icon", "linkedin"],
        ["X", "x", "x"],
        ["PwC", "pwc", "pwc"],
        ["Lloyds Bank", "lloyds-bank", "lloydsbank"],
        ["American Express", "american-express", "americanexpress"],

        // ROW 4
        ["Anthropic", "anthropic-icon", "anthropic"],
        ["Figma", "figma", "figma"],
        ["AMD", "amd-icon", "amd"],
        ["EY", "ernst-young-icon", "ey"],
        ["Pinterest", "pinterest-icon", "pinterest"],
        ["Mastercard", "mastercard", "mastercard"],
        ["TikTok", "tiktok-icon", "tiktok"],

        // ROW 5
        ["Mozilla", "mozilla-icon", "mozilla"],
        ["McKinsey", "mckinsey-and-company", "mckinseyandcompany"],
        ["Expedia", "expedia-icon", "expedia"],
        ["Disney", "walt-disney", "disney"],
        ["IKEA", "ikea", "ikea"],
        ["Cohere", "cohere-icon", "cohere"],
        ["Citi", "citi", "citi"],

        // ROW 6
        ["Ogilvy", "ogilvy", "ogilvy"],
        ["Monzo", "monzo-icon", "monzo"],
        ["Airbnb", "airbnb-icon", "airbnb"],
        ["Barclays", "barclays-icon", "barclays"],
        ["Public", "public", "public"],
        ["Intel", "intel", "intel"],
        ["McDonald's", "mcdonalds-icon", "mcdonalds"]
    ];

    const pages = [pageOne, pageTwo];


    /* =========================================
       CREATE LOGO (WITH AUTOMATIC FALLBACK)
    ========================================= */

    function createLogo(name, iconifySlug, simpleSlug) {
        const logo = document.createElement("div");
        logo.className = "trusted-logo";

        const image = document.createElement("img");
        image.alt = name;
        image.loading = "lazy";
        image.draggable = false;

        // First attempt: Iconify Logos
        image.src = `https://api.iconify.design/logos:${iconifySlug}.svg`;

        // If Iconify fails, fallback to SimpleIcons automatically
        image.onerror = function () {
            this.onerror = null; // Infinite loop rokvano guard
            this.src = `https://cdn.simpleicons.org/${simpleSlug}`;
        };

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
            const iconifySlug = logoData[1];
            const simpleSlug = logoData[2] || logoData[1];

            page.appendChild(createLogo(name, iconifySlug, simpleSlug));
        });

        return page;
    }


    /* =========================================
       BUILD ALL PAGES
    ========================================= */

    pages.forEach(function (logos) {
        track.appendChild(createPage(logos));
    });

    // Seamless infinite clone
    const firstPage = track.children[0];
    if (firstPage) {
        const firstPageClone = firstPage.cloneNode(true);
        track.appendChild(firstPageClone);
    }


    /* =========================================
       SLIDER LOGIC
    ========================================= */

    let currentPage = 0;
    const totalPages = pages.length;

    function moveSlider() {
        currentPage++;
        track.style.transform = `translate3d(-${currentPage * 100}%, 0, 0)`;

        if (currentPage === totalPages) {
            setTimeout(function () {
                track.style.transition = "none";
                currentPage = 0;
                track.style.transform = "translate3d(0, 0, 0)";
                track.offsetHeight; // Reflow
                track.style.transition = "transform 1.8s ease-in-out";
            }, 1800);
        }
    }

    track.style.transition = "transform 1.8s ease-in-out";

    setInterval(function () {
        moveSlider();
    }, 7000);

});