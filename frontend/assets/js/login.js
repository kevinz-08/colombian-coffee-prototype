//HEADER //

function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.querySelector('.menu-toggle');
            
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        // Cerrar menú al hacer click en un enlace (móvil)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const navLinks = document.getElementById('navLinks');
                const menuToggle = document.querySelector('.menu-toggle');
                
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Cerrar menú al redimensionar ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                const navLinks = document.getElementById('navLinks');
                const menuToggle = document.querySelector('.menu-toggle');
                
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });





const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");

});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});

// const btn=document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     container.classList.toggle("toggle");
// });