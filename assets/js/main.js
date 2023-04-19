    const navbar = document.querySelector(".briefcase_header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 45) {
            navbar.classList.add("briefcase_header-active");
        } else {
            navbar.classList.remove("briefcase_header-active");
        }
    });
