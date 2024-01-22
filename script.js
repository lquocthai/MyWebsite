let headerMenu = document.querySelector(".heading");
            let lastScrollY = window.scrollY;
            window.addEventListener("scroll", () => {
                if (lastScrollY < window.scrollY) {
                    headerMenu.classList.add("menu_hide");
                }
                else {
                    headerMenu.classList.remove("menu_hide");
                }
                lastScrollY = window.scrollY;
            });