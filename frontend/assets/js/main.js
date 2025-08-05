//Splash Screen

setTimeout(() => {
            document.querySelector('.splash-screen').remove();
        }, 4500);

        

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


// CARRUSEL //

  const carrusel = document.getElementById('carrusel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentIndex = 0;

        function update() {
            const elemento = carrusel.querySelector('.elemento');
            const itemWidth = elemento.offsetWidth + 20;
            const visibleItems = Math.floor((carrusel.parentElement.offsetWidth - 40) / itemWidth);
            const maxIndex = Math.max(0, carrusel.children.length - visibleItems);
            
            currentIndex = Math.min(currentIndex, maxIndex);
            carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
            
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }

        prevBtn.onclick = () => currentIndex > 0 && (currentIndex--, update());
        nextBtn.onclick = () => (currentIndex++, update());

        // Touch
        let startX = 0;
        carrusel.parentElement.ontouchstart = e => startX = e.touches[0].clientX;
        carrusel.parentElement.ontouchend = e => {
            const diff = startX - e.changedTouches[0].clientX;
            Math.abs(diff) > 50 && (diff > 0 ? nextBtn.click() : prevBtn.click());
        };

        window.onresize = () => setTimeout(update, 100);
        document.addEventListener('DOMContentLoaded', () => setTimeout(update, 200));

// CONTACT //

       document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = document.querySelector('.submit-btn');
            btn.style.background = '#27ae60';
            btn.textContent = '¡Enviado!';
            
            setTimeout(() => {
                btn.style.background = '#3498db';
                btn.textContent = 'Enviar Mensaje';
                this.reset();
            }, 2000);
        });