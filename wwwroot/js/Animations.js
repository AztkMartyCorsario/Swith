document.addEventListener('DOMContentLoaded', function () {
    /*
    //Función de animación
    const startAnimation = (element, classAnimation) => {
        const observer = new IntersectionObserver(entries => {
            
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains(classAnimation)) {
                    entry.target.classList.add(classAnimation);
                } else if (!entry.isIntersecting && entry.target.classList.contains(classAnimation)) {
                    entry.target.classList.remove(classAnimation);
                }
               
            });

        });

        const elementsAnimated = document.querySelectorAll(element);
        elementsAnimated.forEach((el) => observer.observe(el));

       
    } 
    //Animación de aparición
    startAnimation('.appear-animation-hidden', 'appear-animation-show');
    
    startAnimation('.title-appear-animated', 'appear-animation');


    //Animación elementos que aparecen desde la izquierda
    startAnimation('.left-animation-hidden', 'left-animation-show');


    //Animación elementos que aparecen desde derecha
    startAnimation('.right-animation-hidden', 'right-animation-show');


    //Animación elementos que aparecen desde abajo
    startAnimation('.bottom-animation-hidden', 'bottom-animation-show');
})*/

//Slider Parallax Home

/*const sections = document.querySelectorAll(".element");
let currentIndex = 0;

// Navegar a la sección inicial
navigateToSection(currentIndex);

function navigateToSection(index) {
    // Convertir el índice en un valor circular usando el operador de módulo
    index = (index + sections.length) % sections.length;

    // Actualizar la posición y visibilidad de las secciones
    sections.forEach((section, i) => {
        if (i === index) {
            // Estilos para la sección activa
            section.style.transition = '1s';
            section.style.opacity = '1';
            section.style.transform = 'translateY(50%)';

            setTimeout(() => {

            section.style.zIndex = 2; // z-index de 5 para la sección activa
            section.style.visibility = 'inherit'; // Hacerla visible
            }, 1000);
            setTimeout(() => {
             section.style.transform = 'translateY(0%)'; // Baja ligeramente después de subir
             section.style.transition = '2s';
    }, 500); 
        } else if (i === (index - 1 + sections.length) % sections.length || i === (index + 1) % sections.length) {
            // Estilos para las secciones adyacentes (las que están justo antes o después de la activa)
            section.style.transition = '2s ease-in-out, transform 2s ease-in-out';
            section.style.transform = 'translateX(50%)';

            setTimeout(() => {
                section.style.opacity = '0'; // O puedes cambiar este valor según prefieras
                section.style.zIndex = 1; // z-index de 9 para las secciones adyacentes
                section.style.visibility = 'inherit'; // Mantenerlas visibles
            }, 1000);
        } else {
            // Estilos para las secciones inactivas
            section.style.transition = '1s ease-in-out, transform 0.5s ease-in-out';
            section.style.opacity = '0';
            section.style.zIndex = 0; // z-index de 0 para las demás
            section.style.visibility = 'hidden'; // Ocultarlas
        }

        // Actualizar la posición con transform
        section.style.transform = `translateY(${(i - index) * 100}vh)`;
    });

    currentIndex = index; // Actualizar el índice actual
}*/

/*


    // Variables para el toque
let touchStartY = 0;
let touchEndY = 0;

// Manejar el evento de toque
window.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY; // Guardar la posición inicial del toque
});

window.addEventListener("touchmove", (event) => {
    touchEndY = event.touches[0].clientY; // Actualizar la posición del toque
});

window.addEventListener("touchend", () => {
    const threshold = 30; // Umbral para el deslizamiento

    if (touchStartY > touchEndY + threshold) {
        // Deslizamiento hacia abajo
        navigateToSection(currentIndex + 1); // Mover a la siguiente sección
    } else if (touchStartY < touchEndY - threshold) {
        // Deslizamiento hacia arriba
        navigateToSection(currentIndex - 1); // Mover a la sección anterior
    }
});

// Eliminar el evento de scroll anterior (opcional)
window.removeEventListener("wheel", wheelHandler);
*/

    //Letters

    document.addEventListener('DOMContentLoaded', () => {
    let heading = document.querySelector('.section-heading');
    let text = heading.textContent;
    heading.textContent = ''; // Limpia el contenido original

    // Divide el texto en letras y las envuelve en spans
    text.split('').forEach(letter => {
        let span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Espacios no se colapsan
        heading.appendChild(span);
    });

    // Función para animar las letras una por una
    function animateLetters() {
        let spans = heading.querySelectorAll('span');
        spans.forEach((span, i) => {
            setTimeout(() => {
                span.classList.add('show');
            }, i * 100); // Intervalo entre cada letra
        });
    }

    // Dispara la animación al cargar la página o cambiar la sección
    animateLetters();
});

