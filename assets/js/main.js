    const navbar = document.querySelector(".briefcase_header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 45) {
            navbar.classList.add("briefcase_header-active");
        } else {
            navbar.classList.remove("briefcase_header-active");
        }
    });

    {
    const runHTML = document.querySelector(".briefcase_menu")
    const bxcartHTML = document.querySelector(".menu")
    
    runHTML.addEventListener("click", function (){
        bxcartHTML.classList.toggle("run__show")
    })

     
    const volver = document.querySelector(".home")
    const ingre = document.querySelector(".menu")
    volver.addEventListener("click", function () {
        ingre.classList.toggle("run__show")
    })
    }

{
    
    const proyeHTML = document.querySelector(".new")
    const pro = document.querySelector(".proye")
    
    proyeHTML.addEventListener("click", function (){
        pro.classList.toggle("proye_show")
    })
    



    const volver = document.querySelector(".volver")
    const ingre = document.querySelector(".proye")
    volver.addEventListener("click", function () {
        ingre.classList.toggle("proye_show")
    })
}