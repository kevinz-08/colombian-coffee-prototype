// HEADER

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


// Variables globales
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnTypica = document.querySelector('.typica');
const btnCaturra = document.querySelector('.caturra');
const btnBourbon = document.querySelector('.bourbon');
const btnTabi = document.querySelector('.tabi');
const btnMaragogipe = document.querySelector('.maragogipe');
const btnPacamara = document.querySelector('.pacamara'); 
const contenedorGranos = document.querySelector('.granos-cafe');
const modal = document.getElementById('modal-info');
const modalContenido = document.querySelector('.modal-contenido');
const btnCerrarModal = document.querySelector('.btn-cerrar');

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    eventos();
    configurarFiltros();
    implementarLazyLoading();
    animarEntrada();
});

/**
 * Event listeners principales
 */
const eventos = () => {
    // Event listeners para botones "Leer más"
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-leer-mas')) {
            const tarjeta = e.target.closest('.grano-cafe');
            const nombreGrano = tarjeta.querySelector('h2').textContent;
            mostrarModal(nombreGrano, tarjeta);
        }
    });

    // Cerrar modal
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', cerrarModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal();
        });
    }

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('ocultar')) {
            cerrarModal();
        }
    });
}

/**
 * Muestra el modal con información detallada
 */
const mostrarModal = (nombreGrano, tarjeta) => {
    const info = informacionDetallada[nombreGrano];
    if (!info) {
        console.error('Información no encontrada para:', nombreGrano);
        return;
    }

    const imagenSrc = tarjeta.querySelector('img').dataset.src || tarjeta.querySelector('img').src;
    const categoria = tarjeta.querySelector('.categoria-badge').textContent;
    const origen = tarjeta.querySelector('.origen').textContent.replace('📍', '').trim();
    const altitud = tarjeta.querySelector('.altitud').textContent.replace('🏔️', '').trim();

    modalContenido.innerHTML = `
        <span class="btn-cerrar">&times;</span>
        <div class="modal-body">
            <div class="modal-header">
                <img src="${imagenSrc}" alt="${nombreGrano}" class="modal-imagen">
                <div class="modal-title-section">
                    <h2 class="modal-title">${nombreGrano}</h2>
                    <span class="modal-categoria">${categoria}</span>
                </div>
                <div class="modal-info-badges">
                    <span class="info-badge">
                        <i class="fas fa-map-marker-alt"></i>${origen}
                    </span>
                    <span class="info-badge">
                        <i class="fas fa-mountain"></i>${altitud}
                    </span>
                </div>
            </div>

            <div class="modal-sections">
                <div class="modal-seccion">
                    <h3 class="seccion-titulo">
                        <i class="fas fa-history"></i>Historia y Origen
                    </h3>
                    <p class="seccion-texto">${info.historia}</p>
                </div>

                <div class="modal-seccion">
                    <h3 class="seccion-titulo">
                        <i class="fas fa-seedling"></i>Cultivo y Condiciones
                    </h3>
                    <p class="seccion-texto">${info.cultivo}</p>
                </div>

                <div class="modal-seccion">
                    <h3 class="seccion-titulo">
                        <i class="fas fa-cogs"></i>Procesamiento
                    </h3>
                    <p class="seccion-texto">${info.procesamiento}</p>
                </div>

                <div class="modal-seccion">
                    <h3 class="seccion-titulo">
                        <i class="fas fa-coffee"></i>Perfil de Sabor
                    </h3>
                    <p class="seccion-texto">${info.perfil}</p>
                </div>

                <div class="modal-seccion">
                    <h3 class="seccion-titulo">
                        <i class="fas fa-utensils"></i>Preparación y Maridaje
                    </h3>
                    <p class="seccion-texto">${info.maridaje}</p>
                </div>
            </div>
        </div>
    `;

    // Re-asignar el event listener del botón cerrar
    const nuevoBtnCerrar = modalContenido.querySelector('.btn-cerrar');
    nuevoBtnCerrar.addEventListener('click', cerrarModal);

    modal.classList.remove('ocultar');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal
 */
const cerrarModal = () => {
    if (modal) {
        modal.classList.add('ocultar');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Implementa lazy loading para las imágenes
 */
const implementarLazyLoading = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imagen = entry.target;
                cargarImagen(imagen);
                observer.unobserve(imagen);
            }
        });
    });

    imagenes.forEach(imagen => {
        observer.observe(imagen);
    });
}

/**
 * Carga una imagen con efecto de transición
 */
const cargarImagen = (imagen) => {
    // Si la imagen ya tiene src y no tiene data-src, no hacer nada
    if (imagen.src && !imagen.dataset.src) {
        imagen.classList.remove('img-placeholder');
        return;
    }

    const srcToLoad = imagen.dataset.src || imagen.src;
    const imgTemp = new Image();
    
    imgTemp.onload = () => {
        imagen.src = srcToLoad;
        imagen.classList.remove('img-placeholder');
        imagen.style.opacity = '0';
        imagen.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            imagen.style.opacity = '1';
        }, 100);
    };
    
    imgTemp.onerror = () => {
        console.warn('Error cargando imagen:', srcToLoad);
        imagen.src = '../assets/Images/placeholder.webp';
        imagen.classList.remove('img-placeholder');
    };
    
    imgTemp.src = srcToLoad;
}

/**
 * Configura el sistema de filtrado
 */
const configurarFiltros = () => {
    let granosArreglo = [];
    const granos = document.querySelectorAll('.grano-cafe');

    // Convertir NodeList a Array
    granos.forEach(grano => granosArreglo = [...granosArreglo, grano]);

    // Filtrar por categorías - ACTUALIZADO para coincidir con data-tipo del HTML
    const typicas = granosArreglo.filter(item => item.getAttribute('data-tipo') === 'typica');
    const caturras = granosArreglo.filter(item => item.getAttribute('data-tipo') === 'caturra');
    const bourbons = granosArreglo.filter(item => item.getAttribute('data-tipo') === 'bourbon');
    const tabis = granosArreglo.filter(item => item.getAttribute('data-tipo') === 'tabi');
    const maragogipes = granosArreglo.filter(item => item.getAttribute('data-tipo') === 'maragogipe');
    const pacamaras = granosArreglo.filter(item => item.getAttribute('data-tipo') === 'Pacamara'); // NUEVO

    configurarEventListeners(typicas, caturras, bourbons, tabis, maragogipes, pacamaras, granosArreglo);
}

/**
 * Configura los event listeners para los filtros
 */
const configurarEventListeners = (typicas, caturras, bourbons, tabis, maragogipes, pacamaras, todos) => {
    if (btnTypica) {
        btnTypica.addEventListener('click', () => {
            filtrarYMostrar(typicas);
            activarBoton(btnTypica);
        });
    }

    if (btnCaturra) {
        btnCaturra.addEventListener('click', () => {
            filtrarYMostrar(caturras);
            activarBoton(btnCaturra);
        });
    }

    if (btnBourbon) {
        btnBourbon.addEventListener('click', () => {
            filtrarYMostrar(bourbons);
            activarBoton(btnBourbon);
        });
    }

    if (btnTabi) {
        btnTabi.addEventListener('click', () => {
            filtrarYMostrar(tabis);
            activarBoton(btnTabi);
        });
    }

    if (btnMaragogipe) {
        btnMaragogipe.addEventListener('click', () => {
            filtrarYMostrar(maragogipes);
            activarBoton(btnMaragogipe);
        });
    }

    // NUEVO: Event listener para Pacamara
    if (btnPacamara) {
        btnPacamara.addEventListener('click', () => {
            filtrarYMostrar(pacamaras);
            activarBoton(btnPacamara);
        });
    }

    if (btnTodos) {
        btnTodos.addEventListener('click', () => {
            filtrarYMostrar(todos);
            activarBoton(btnTodos);
        });
    }
}

/**
 * Filtra y muestra granos con animaciones
 */
const filtrarYMostrar = (items) => {
    // Fade out de granos actuales
    const granosActuales = contenedorGranos.querySelectorAll('.grano-cafe');
    granosActuales.forEach((grano, index) => {
        setTimeout(() => {
            grano.classList.add('fade-out');
        }, index * 50);
    });

    // Limpiar y mostrar nuevos elementos
    setTimeout(() => {
        limpiarHtml(contenedorGranos);
        
        items.forEach((item, index) => {
            item.classList.remove('fade-in');
            item.classList.add('fade-out');
            contenedorGranos.appendChild(item);
            
            // Fade in escalonado
            setTimeout(() => {
                item.classList.remove('fade-out');
                item.classList.add('fade-in');
            }, index * 150);
        });
    }, 400);
}

/**
 * Activa visualmente el botón seleccionado
 */
const activarBoton = (botonActivo) => {
    // Remover clase activa de todos los botones
    document.querySelectorAll('.botones-filtros button').forEach(btn => {
        btn.classList.remove('btn-activo');
    });
    
    // Activar botón seleccionado
    botonActivo.classList.add('btn-activo');
}

/**
 * Limpia el contenedor HTML
 */
const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

/**
 * Anima la entrada inicial de elementos
 */
const animarEntrada = () => {
    // Animar entrada del título
    const titulo = document.querySelector('.titulo-principal');
    const subtitulo = document.querySelector('.subtitulo');
    
    if (titulo) {
        titulo.style.opacity = '0';
        titulo.style.transform = 'translateY(-30px)';
        
        setTimeout(() => {
            titulo.style.transition = 'all 0.8s ease';
            titulo.style.opacity = '1';
            titulo.style.transform = 'translateY(0)';
        }, 200);
    }

    if (subtitulo) {
        subtitulo.style.opacity = '0';
        subtitulo.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            subtitulo.style.transition = 'all 0.6s ease';
            subtitulo.style.opacity = '1';
            subtitulo.style.transform = 'translateY(0)';
        }, 500);
    }

    // Animar botones
    const botones = document.querySelectorAll('.botones-filtros button');
    botones.forEach((boton, index) => {
        boton.style.opacity = '0';
        boton.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            boton.style.transition = 'all 0.4s ease';
            boton.style.opacity = '1';
            boton.style.transform = 'translateY(0)';
        }, 800 + (index * 100));
    });

    // Activar botón "Todos" por defecto
    setTimeout(() => {
        if (btnTodos) {
            activarBoton(btnTodos);
        }
    }, 1500);
}

/**
 * Efectos adicionales al cargar la página
 */
window.addEventListener('load', () => {
    console.log('Enciclopedia del café cargada correctamente');
    
    // Precargar algunas imágenes importantes
    const imagenesImportantes = document.querySelectorAll('.grano-cafe:nth-child(-n+4) img');
    imagenesImportantes.forEach(img => {
        if (img.dataset.src || img.src) {
            const tempImg = new Image();
            tempImg.src = img.dataset.src || img.src;
        }
    });
});

/**
 * Optimización para dispositivos móviles
 */
if ('ontouchstart' in window) {
    document.querySelectorAll('.grano-cafe').forEach(grano => {
        grano.addEventListener('touchstart', () => {
            grano.style.transform = 'scale(0.98)';
        });
        
        grano.addEventListener('touchend', () => {
            setTimeout(() => {
                grano.style.transform = '';
            }, 100);
        });
    });
}

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