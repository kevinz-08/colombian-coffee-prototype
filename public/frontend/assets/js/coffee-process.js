       // Intersection Observer para animaciones de scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observar todos los elementos con clase 'reveal'
        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Animación de hover mejorada para los iconos
        document.querySelectorAll('.step-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.15) rotate(10deg)';
                icon.style.filter = 'brightness(1.1)';
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'brightness(1)';
            });
        });

        // Click en iconos para mostrar/ocultar detalles
        document.querySelectorAll('.step-icon').forEach((icon, index) => {
            icon.addEventListener('click', () => {
                const stepContent = icon.nextElementSibling;
                const details = stepContent.querySelector('.step-details');
                
                if (details.style.maxHeight && details.style.maxHeight !== '0px') {
                    details.style.maxHeight = '0px';
                } else {
                    details.style.maxHeight = '300px';
                }
            });
        });

        // Animación de carga suave
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Parallax sutil para elementos flotantes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.floating-bean');
            const speed = 0.5;

            parallax.forEach(element => {
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });