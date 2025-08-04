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

// Base de datos de información detallada de cada grano
const informacionDetallada = {
    'Coffea Typica': {
        historia: 'La variedad Typica es considerada la variedad madre de muchos cafés arábica actuales. Originaria de Etiopía, fue la primera en ser cultivada comercialmente en Yemen y posteriormente llevada a Java por los holandeses en el siglo XVII. En Colombia, se cultiva principalmente en Nariño y la Sierra Nevada.',
        cultivo: 'Requiere altitudes entre 1400-2000 metros, temperaturas entre 15-24°C y precipitaciones de 1500-2000mm anuales. Es susceptible a la roya del café pero produce granos de excelente calidad. Prefiere suelos volcánicos y climas frescos de montaña.',
        procesamiento: 'Se procesa principalmente por método lavado para resaltar su acidez natural. El secado debe ser lento y controlado para preservar sus características delicadas. La fermentación controlada realza sus notas florales.',
        perfil: 'Sabor suave y delicado con acidez brillante. Notas florales distintivas con toques a azúcar morena. Aroma floral con toques herbales. Cuerpo ligero pero bien estructurado.',
        maridaje: 'Excelente para preparaciones de filtro como V60 o Chemex. Ideal para el desayuno acompañado de pasteles suaves o frutas. Se aprecia mejor sin azúcar para resaltar su delicadeza natural.'
    },
    'Coffea Caturra': {
        historia: 'Mutación enana de Bourbon descubierta en Brasil en 1937. Se popularizó rápidamente en Colombia, especialmente en Antioquia, Caldas y Nariño, por su facilidad de cultivo y alta productividad. Es una de las variedades más cultivadas en el país.',
        cultivo: 'Adaptable a diferentes altitudes (1300-1800m). Su tamaño compacto facilita la cosecha y permite mayor densidad de siembra. Resistente a vientos fuertes y con buena productividad. Requiere cuidados regulares para mantener calidad.',
        procesamiento: 'Versátil en procesamiento. El método lavado resalta su acidez equilibrada, mientras que el natural desarrolla mayor dulzura. Responde bien al procesamiento honey que equilibra acidez y dulzura.',
        perfil: 'Sabor balanceado característico con notas frutales y chocolate. Acidez media bien integrada. Taza limpia con final persistente. Cuerpo medio que permite versatilidad en preparación.',
        maridaje: 'Versátil para diferentes métodos de preparación. Excelente para espresso y métodos de filtro. Combina bien con chocolate, frutas rojas y postres moderadamente dulces.'
    },
    'Coffea Bourbon': {
        historia: 'Mutación natural de Typica descubierta en la isla Bourbon (ahora Reunión) en el siglo XVIII. Los franceses la desarrollaron y se extendió por América Latina. En Colombia se cultiva principalmente en Huila y Tolima, regiones reconocidas por su calidad excepcional.',
        cultivo: 'Prefiere altitudes de 1400-2000 metros. Más productiva que Typica pero igualmente susceptible a enfermedades. Requiere suelos volcánicos ricos en minerales y condiciones climáticas estables con diferencias marcadas de temperatura día/noche.',
        procesamiento: 'Responde bien tanto al procesamiento lavado como al natural. El procesamiento honey resalta especialmente sus notas dulces. Requiere fermentación controlada para desarrollar su perfil complejo.',
        perfil: 'Sabor dulce con cuerpo redondo y sedoso. Notas distintivas a frutas rojas, vainilla y toques florales. Acidez alta pero bien equilibrada. Mayor complejidad aromática que otras variedades tradicionales.',
        maridaje: 'Perfecto para espresso y cappuccino. Combina excelentemente con postres de frutas rojas, chocolate blanco y preparaciones con vainilla. Ideal para métodos de preparación que resalten su dulzura natural.'
    },
    'Coffea Tabi': {
        historia: 'Variedad desarrollada por Cenicafé (Centro Nacional de Investigaciones de Café de Colombia) como resultado del cruce genético entre Typica, Bourbon y Timor. Creada específicamente para combinar resistencia a enfermedades con calidad excepcional de taza.',
        cultivo: 'Se cultiva principalmente en Santander y Tolima entre 1300-1800 metros. Presenta buena resistencia a la roya del café y otras enfermedades comunes. Requiere manejo técnico especializado para expresar su potencial de calidad.',
        procesamiento: 'Responde excelentemente a diferentes métodos de procesamiento. El lavado resalta su equilibrio, mientras que procesos experimentales como honey y natural desarrollan su complejidad frutal y dulce.',
        perfil: 'Excelente equilibrio entre acidez y dulzura. Notas dulces prominentes con matices frutales y toques florales delicados. Hereda la complejidad de sus variedades parentales con resistencia mejorada.',
        maridaje: 'Versátil para múltiples preparaciones. Excelente en espresso por su equilibrio, también destaca en métodos de filtro. Combina bien con postres frutales y chocolate semi-amargo.'
    },
    'Coffea Maragogipe': {
        historia: 'Conocido como "grano elefante" por su tamaño excepcional, es una mutación natural de Typica descubierta en Brasil en 1870. Se caracteriza por producir los granos de café más grandes del mundo, llegando a ser hasta tres veces más grandes que un grano normal.',
        cultivo: 'Se cultiva en Antioquia y Quindío entre 1200-1600 metros. Requiere condiciones muy específicas y tiene baja productividad. Los árboles son más grandes que otras variedades y requieren más espacio entre plantas.',
        procesamiento: 'Su gran tamaño requiere técnicas especiales de procesamiento. El secado debe ser más prolongado y cuidadoso. El tostado requiere ajustes específicos debido al tamaño del grano para lograr uniformidad.',
        perfil: 'Sabor suave y menos intenso que otras variedades. Notas herbales y florales delicadas. Acidez baja y cuerpo ligero. Su perfil es más sutil y requiere una apreciación refinada.',
        maridaje: 'Ideal para preparaciones suaves como pour-over o prensa francesa. Se aprecia mejor en preparaciones que resalten su delicadeza. Combina con postres ligeros y té de hierbas.'
    },
    'Coffea Pacamara': { // NUEVO: Información para Pacamara
        historia: 'Híbrido creado en El Salvador en 1958 mediante el cruce entre Pacas (mutación de Bourbon) y Maragogipe. Esta variedad combina el cuerpo robusto del Pacas con el tamaño de grano grande del Maragogipe. En Colombia se ha adaptado bien a las condiciones de Valle del Cauca y Nariño.',
        cultivo: 'Se cultiva entre 1300-1800 metros de altitud. Requiere condiciones climáticas específicas con temperaturas moderadas y buena precipitación. Los árboles son de porte alto y requieren manejo cuidadoso. Productividad media pero calidad excepcional.',
        procesamiento: 'Responde excelentemente a diferentes métodos de procesamiento. El método lavado resalta su acidez compleja, mientras que el procesamiento natural desarrolla su dulzura frutal. Los procesos honey potencian su cremosidad característica.',
        perfil: 'Perfil extraordinariamente complejo con notas afrutadas intensas, cuerpo cremoso y bien estructurado. Presenta notas a chocolate, especias dulces y frutas tropicales. Acidez media-alta bien balanceada con dulzura prominente.',
        maridaje: 'Excelente para espresso por su cuerpo cremoso. También destaca en métodos de filtro que resalten su complejidad. Combina perfectamente con chocolate semi-amargo, postres con especias y frutas exóticas. Ideal para catas especializadas.'
    }
};

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