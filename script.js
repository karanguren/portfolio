
const proyectos = [
    {
        titulo: "Genesis Skin & Beauty",
        descripcion: "Optimización de la experiencia general y el rendimiento (performance) de la página administrativa del Senado de México en un 20%.",
        tecnologias: ["ReactJs", "Javascript (ES6)", "HTML5", "SASS", "Bootstrap"],
        linkDemo: "https://karanguren.github.io/genesisSkinBeauty-page/", 
        linkRepo: "#" 
    },
    {
        titulo: "Piedy",
        descripcion: "Desarrollo del Landing Page de Piedy.com y mejora de la interfaz de módulos del sistema de facturación y administrativo, utilizando Filament para una UI/UX robusta y ChartJs para gráficas.",
        tecnologias: ["HTML", "CSS", "Javascript", "Bootstrap", "Filament", "Chartsjs", "Laravel"],
        linkDemo: "https://www.piedy.com", 
        linkRepo: "#" 
    },
    {
        titulo: "Inversiones TRX",
        descripcion: "Actualización y modernización del Landing Page de inversionestrx.com.",
        tecnologias: ["HTML", "CSS", "Javascript", "Bootstrap", "Flickity"],
        linkDemo: "https://karanguren.github.io/trxWeb/", 
        linkRepo: "#" 
    },
    {
        titulo: "TadMass",
        descripcion: "Desarrollo del Landing Page de tadmedi.com y mejora de la interfaz de módulos para el sistema administrativo.",
        tecnologias: ["HTML", "CSS", "Javascript (ES6)", "Bootstrap", "Laravel", "Filament"],
        linkDemo: "https://karanguren.github.io/tadmassWeb/", 
        linkRepo: "#" 
    },
    {
        titulo: "VRparaglider",
        descripcion: "Desarrollo de la interfaz de nuevos módulos para la gestión de datos empresariales. Integración de la librería Apexcharts para visualizaciones avanzadas.",
        tecnologias: ["ReactJs", "Javascript", "MaterialUI", "Apexcharts", "API Rest"],
        linkDemo: "https://karanguren.github.io/vrparaglider/", 
        linkRepo: "#" 
    },
    {
        titulo: "SQLapio.com V1",
        descripcion: "Desarrollo del Landing Page de Sqlapio.com y mejora de la interfaz de módulos para el sistema médico. Implementación de funcionalidades, optimización de gráficas con Chartsjs e integración de servicios API Rest.",
        tecnologias: ["HTML", "CSS", "Javascript (ES6)", "Bootstrap", "Laravel", "ChartJs", "API Rest"],
        linkDemo: "https://karanguren.github.io/sqlapioMedWebV1/home.html", 
        linkRepo: "#" 
    },
    {
        titulo: "SQLapio.com V2",
        descripcion: "Desarrollo del Landing Page de Sqlapio.com y mejora de la interfaz de módulos para el sistema médico. Implementación de funcionalidades, optimización de gráficas con Chartsjs e integración de servicios API Rest.",
        tecnologias: ["HTML", "CSS", "Javascript (ES6)", "Bootstrap", "Laravel", "ChartJs", "API Rest"],
        linkDemo: "https://karanguren.github.io/sqlapioMedWebV2/", 
        linkRepo: "#" 
    },
    {
        titulo: "SQLapio Technology",
        descripcion: "Desarrollo del Landing Page de sqlapiotech.com.",
        tecnologias: ["HTML", "CSS", "Javascript", "Bootstrap"],
        linkDemo: "https://karanguren.github.io/sqlapioTechnologyWeb/", 
        linkRepo: "#" 
    },
    // {
    //     titulo: "Página de Administración de Token ALBT",
    //     descripcion: "Desarrollo de la interfaz de administración para el token ALBT, implementando patrones de diseño propios basados en MaterialUI.",
    //     tecnologias: ["ReactJs", "Javascript", "MaterialUI", "HTML5", "SASS"],
    //     linkDemo: "#", 
    //     linkRepo: "#" 
    // }
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
                    <p class="text-muted small mt-auto pt-2">
                        **Tecnologías:** ${proyecto.tecnologias.join(', ')}
                    </p>
                    <div class="mt-3">
                        <a href="${proyecto.linkDemo}" target="_blank" class="btn btn-primary btn-sm me-2">Ver Demo</a>
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


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };