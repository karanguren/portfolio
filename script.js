
const proyectos = [
    {
        titulo: "Sistema Médico SQLapio",
        descripcion: "Mejora y desarrollo de la interfaz de módulos para el sistema médico, incluyendo la implementación de funcionalidades y optimización de gráficas con Chartsjs.",
        tecnologias: ["HTML", "CSS", "Javascript (ES6)", "Bootstrap", "Laravel", "ChartJs"],
        linkDemo: "#", 
        linkRepo: "#" 
    },
    {
        titulo: "Sistema Administrativo Piedy",
        descripcion: "Desarrollo del Landing Page y mejora de la interfaz de módulos del sistema de facturación y administrativo, utilizando Filament para una UI/UX robusta.",
        tecnologias: ["HTML", "CSS", "Javascript", "Bootstrap", "Filament", "Chartsjs"],
        linkDemo: "#", 
        linkRepo: "#" 
    },
    {
        titulo: "Mejora de la Experiencia en Senado de México",
        descripcion: "Optimización de la experiencia general y el rendimiento (performance) de la página administrativa del Senado de México en un 20%.",
        tecnologias: ["ReactJs", "Javascript (ES6)", "HTML5", "SASS", "Bootstrap"],
        linkDemo: "#", 
        linkRepo: "#" 
    },
    {
        titulo: "Plataforma de Gestión de Datos Goodgrowth",
        descripcion: "Desarrollo de la interfaz de nuevos módulos para la gestión de datos empresariales, incluyendo la integración de la librería Apexcharts para visualizaciones avanzadas.",
        tecnologias: ["ReactJs", "Javascript", "MaterialUI", "Apexcharts", "APIS Rest"],
        linkDemo: "#", 
        linkRepo: "#" 
    },
    {
        titulo: "Página de Administración de Token ALBT",
        descripcion: "Desarrollo de la interfaz de administración para el token ALBT, implementando patrones de diseño creados propios de la empresa basados en MaterialUI.",
        tecnologias: ["ReactJs", "Javascript", "MaterialUI", "HTML5", "SASS"],
        linkDemo: "#", 
        linkRepo: "#" 
    }
];

function renderizarProyectos() {
    const contenedorProyectos = document.getElementById('proyectos-contenedor');

    proyectos.forEach(proyecto => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4'); 

        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-primary fw-bold">${proyecto.titulo}</h5>
                    <p class="card-text">${proyecto.descripcion}</p>
                    <p class="text-muted small mt-auto pt-2">
                        **Tecnologías:** ${proyecto.tecnologias.join(', ')}
                    </p>
                    <div class="mt-3">
                        <a href="${proyecto.linkDemo}" target="_blank" class="btn btn-primary btn-sm me-2">Ver Demo</a>
                        <a href="${proyecto.linkRepo}" target="_blank" class="btn btn-outline-secondary btn-sm">Código</a>
                    </div>
                </div>
            </div>
        `;
        
        contenedorProyectos.appendChild(colDiv);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    renderizarProyectos(); 
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


function openEmail() {
      const email = "karanguren_12@outlook.com";
      const subject = "Desarrollador Frontend";

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
      window.open(gmailUrl, "_blank");

      navigator.clipboard.writeText(email).then(() => {
        alert("Correo copiado al portapapeles. Si Gmail no se abre, pégalo manualmente en tu cliente de correo.");
      }).catch(err => {
        console.error("Error al copiar el correo: ", err);
      });
    }