// Navbar burger toggle
$(function () {
    $(".navbar-burger").on("click", function () {
        const target = $(this).data("target");
        $("#" + target).toggleClass("is-active");
        $(this).toggleClass("is-active");
    });

    // Smooth scrolling for internal nav links
    $("a.nav-link").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top - 80,
            },
            600
        );

        // Close mobile nav
        $("#navMenu").removeClass("is-active");
        $(".navbar-burger").removeClass("is-active");
    });
});
