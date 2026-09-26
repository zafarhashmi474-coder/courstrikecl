/* =========================================
   TRUSTED COMPANIES
   LOCAL LOGOS
   CONTINUOUS INFINITE SLIDER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("trustedTrack");

    if (!track) return;


    /* =========================================
       LOCAL LOGO PATH
    ========================================= */

    const logoPath = "logos/";


    /* =========================================
       LOGO FILES
    ========================================= */

    const logos = {

        // ROW 1
        accenture: "accenture-B8e8s0T-.svg",
        adobe: "adobe-BcqsFWNQ.svg",
        amazon: "amazon-Di2h6wTx.svg",
        cisco: "cisco-DB3M1NTR.svg",
        ebay: "ebay-BBPoNyCb.svg",
        jpmorgan: "jp-morgan-chase-BFZJZcAb.svg",
        oracle: "oracle-DVpj55Dm.svg",
        spotify: "spotify-1vlQYlz4.svg",
        stripe: "stripe-B_yOJQOV.svg",
        walmart: "walmart-vYA2S4Ej.svg",


        // ROW 2
        netflix: "netflix-BHGFdXVI.svg",
        meta: "meta-BZywIIjr.svg",
        sap: "sap-D0PO_hJ0.svg",
        visa: "visa-CCLr1viw.svg",
        uber: "uber-CuYQ6LLL.svg",
        openai: "openai-C2CruhdW.svg",
        paypal: "pay-pal-Bfc0Ddjo.svg",
        ibm: "ibm-CXb5eiGf.svg",
        nvidia: "nvidia-6ikefk4z.svg",
        salseforce: "salesforce-B_GpkNgn.svg",


        // ROW 3
        apple: "apple-BSb7elEh.svg",
        youtube: "youtube-s_hbr19z.svg",
        linkedin: "linked-in-CQUtIIra.svg",
        square: "square-CBb6pZi4.svg",
        pwc: "pwc-YkmQJs_z.svg",
        x: "x-uzq0HYzV.svg",
        deloitte: "deloitte-DzccWM-R.svg",
        lloydsbank: "lloyds-bank-lZ5iVW51.svg",
        americanexpress: "american-express-BHPcj7-J.svg",
        microsoft: "microsoft-rwvmviyC.svg",


        // ROW 4
        pinterest: "pinterest-c1Nv03xt.svg",
        mastercard: "mastercard-DzuA8yXC.svg",
        ey: "ey-D_19C1MH.svg",
        tiktok: "tik-tok-DsQE0kAg.svg",
        shopify: "shopify-P6Nq5HRK.svg",
        samsung: "samsung-CgcHNOx5.svg",
        amd: "amd-83DV4pPi.svg",
        intuit: "intuit-D1T_YaYF.svg",
        anthropic: "anthropic-CtuPP2GD.svg",
        figma: "figma-Bcp0FF_n.svg",


        // ROW 5
        slack: "slack-ElURnRzW.svg",
        mozilla: "mozilla-C9SH_HDJ.svg",
        mckinsey: "mckinsey-CFF8mJqg.svg",
        kpmg: "kpmg-DCU3pMPb.svg",
        rbc: "rbc-CAcB9Ejg.svg",
        expedia: "expedia-C1o1ZHya.svg",
        disney: "disney-fFHs9X3n.svg",
        ikea: "ikea-Ck8Px6wl.svg",
        cohere: "cohere-BLu928EK.svg",
        citi: "citi-C7NHPaja.svg",


        // ROW 6
        canva: "canva-DKUxXMD1.svg",
        nike: "nike-DEymYOMO.svg",
        airbnb: "airbnb-CtmsI85F.svg",
        morganstanley: "morgan-stanley-CgJehnXY.svg",
        ogilvy: "ogilvy-C7grrWhk.svg",
        monzo: "monzo-DcHvcf-h.svg",
        barclays: "barclays-C0NbH0hv.svg",
        mcdonalds: "mcdonald-s-Dd1zGQfz.svg",
        public: "public-CBs9tUTc.svg",
        intel: "intel-U5DZAR-E.svg"
    };


    /* =========================================
       ROW STRUCTURE
    ========================================= */

    const rows = [

        // ROW 1 - 10
        [
            "accenture",
            "adobe",
            "amazon",
            "cisco",
            "ebay",
            "jpmorgan",
            "oracle",
            "spotify",
            "stripe",
            "walmart"
        ],

        // ROW 2 - 9
        [
            "netflix",
            "meta",
            "sap",
            "visa",
            "uber",
            "openai",
            "paypal",
            "ibm",
            "nvidia",
            "salseforce"
        ],

        // ROW 3 - 10
        [
            "apple",
            "youtube",
            "linkedin",
            "square",
            "pwc",
            "x",
            "deloitte",
            "lloydsbank",
            "americanexpress",
            "microsoft"
        ],

        // ROW 4 - 10
        [
            "pinterest",
            "mastercard",
            "ey",
            "tiktok",
            "shopify",
            "samsung",
            "amd",
            "intuit",
            "anthropic",
            "figma"
        ],

        // ROW 5 - 10
        [
            "slack",
            "mozilla",
            "mckinsey",
            "kpmg",
            "rbc",
            "expedia",
            "disney",
            "ikea",
            "cohere",
            "citi"
        ],

        // ROW 6 - 10
        [
            "canva",
            "nike",
            "airbnb",
            "morganstanley",
            "ogilvy",
            "monzo",
            "barclays",
            "mcdonalds",
            "public",
            "intel"
        ]
    ];


    /* =========================================
       CREATE LOGO
    ========================================= */

    function createLogo(key) {

        const wrapper = document.createElement("div");
        wrapper.className = "trusted-logo";

        const img = document.createElement("img");

        img.src = logoPath + logos[key];
        img.alt = key;
        img.draggable = false;
        img.loading = "eager";

        img.onerror = function () {

            console.warn(
                "LOGO NOT FOUND:",
                logoPath + logos[key]
            );

            wrapper.classList.add("logo-missing");
        };

        wrapper.appendChild(img);

        return wrapper;
    }


    /* =========================================
       CREATE PAGE
    ========================================= */

    function createPage() {

        const page = document.createElement("div");

        page.className = "trusted-page";


        rows.forEach(function (row) {

            const rowElement = document.createElement("div");

            rowElement.className = "trusted-row";


            row.forEach(function (logoKey) {

                rowElement.appendChild(
                    createLogo(logoKey)
                );

            });


            page.appendChild(rowElement);

        });


        return page;
    }


    /* =========================================
       BUILD TWO PAGES
    ========================================= */

    track.innerHTML = "";

    const pageOne = createPage();
    const pageTwo = createPage();

    track.appendChild(pageOne);
    track.appendChild(pageTwo);


    /* =========================================
       CONTINUOUS SLIDER
       HOVER DOES NOT STOP IT
    ========================================= */

    let position = 0;

    const speed = 0.35;

    function animate() {

        position += speed;

        const firstPageWidth =
            track.children[0].offsetWidth;

        if (position >= firstPageWidth) {
            position = 0;
        }

        track.style.transform =
            `translate3d(${-position}px, 0, 0)`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

});