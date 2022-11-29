//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//Scroll down
// $(function() {
//     $('a[href*=#]').on('click', function(e) {
//       e.preventDefault();
//       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//     });
//   });

