(function ($) {
    "use strict";

    $(document).ready(function () {

        // ======== CURSORE PERSONALIZZATO ========
        const t = document.getElementById("cursor"),
              e = document.getElementById("cursor2"),
              i = document.getElementById("cursor3");

        if (t && e && i) {
            document.body.addEventListener("mousemove", function (n) {
                const x = n.clientX + "px";
                const y = n.clientY + "px";
                t.style.left = x;
                t.style.top = y;
                e.style.left = x;
                e.style.top = y;
                i.style.left = x;
                i.style.top = y;
            });

            function onHover() {
                e.classList.add("hover");
                i.classList.add("hover");
            }

            function offHover() {
                e.classList.remove("hover");
                i.classList.remove("hover");
            }

            offHover();

            document.querySelectorAll(".hover-target").forEach(el => {
                el.addEventListener("mouseover", onHover);
                el.addEventListener("mouseout", offHover);
            });
        }

        // ======== FUNZIONI GENERICHE PER SEZIONI ========
        function openSection(sectionClass) {
            $("body").addClass(sectionClass + "-on");
            if ($(window).width() <= 768) {
                $("body").addClass("no-scroll"); // blocca scroll sul body mobile
            }
        }

        function closeSection(sectionClass) {
            $("body").removeClass(sectionClass + "-on no-scroll");
        }

        // ======== SEZIONE ABOUT ========
        $(".about-text").on("click", function () { openSection("about"); });
        $(".about-close").on("click", function () { closeSection("about"); });

        // ======== SEZIONE CONTACT ========
        $(".contact-text").on("click", function () { openSection("contact"); });
        $(".contact-close").on("click", function () { closeSection("contact"); });

        // ======== SEZIONE PROJECT ========
        $(".project").on("click", function () { openSection("project"); });
        $(".project-close").on("click", function () { closeSection("project"); });

        // ======== SEZIONE SKILL ========
        $(".skill").on("click", function () { openSection("skill"); });
        $(".skill-close").on("click", function () { closeSection("skill"); });

        // ======== SEZIONE CURRICULUM ========
        $(".curriculum").on("click", function () { openSection("curriculum"); });
        $(".curriculum-close").on("click", function () { closeSection("curriculum"); });

        // ======== ADATTAMENTO MOBILE AL RIDIMENSIONAMENTO ========
        $(window).on("resize", function() {
            if ($(window).width() > 768) {
                $("body").removeClass("no-scroll");
            }
        });

    });

})(jQuery);