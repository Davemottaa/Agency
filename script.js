// DADOS DOS PROJETOS
const portfolioData = [
    {
        id: 1,
        title: "Chinese Restaurant",
        category: "delivery", 
        description: "Landing Page focada em conversão para delivery de comida chinesa com integração de apps.",
        image: "https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        link: "https://davemottaa.github.io/ChineseRestaurant/",
        tags: ["High Conversion", "UI/UX", "Mobile First"]
    },
    {
        id: 2,
        title: "Bella Salão",
        category: "servicos",
        description: "Site institucional para salão de beleza, destacando serviços e estética elegante.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop", 
        link: "https://davemottaa.github.io/Bella-Salao/",
        tags: ["Beauty", "Design Elegante", "Institucional"]
    },
    {
        id: 3,
        title: "VendCAR",
        category: "varejo", 
        description: "Vitrine digital automotiva para apresentação e venda de veículos.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop", 
        link: "https://davemottaa.github.io/VendCAR/",
        tags: ["Automotivo", "Catálogo", "Responsivo"]
    },
    {
        id: 4,
        title: "Gabrielle Store",
        category: "varejo",
        description: "E-commerce/Vitrine de moda com layout moderno e foco na apresentação dos produtos.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
        link: "https://davemottaa.github.io/GabrielleStore/",
        tags: ["Fashion", "E-commerce", "Minimalista"]
    }
];

// Elementos do DOM
const projectsContainer = document.getElementById('projects-container');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para renderizar os projetos
function displayProjects(projects) {
    if(projects.length === 0) {
        projectsContainer.innerHTML = '<p style="color:var(--text-gray); grid-column: 1/-1; text-align: center;">Nenhum projeto encontrado nesta categoria.</p>';
        return;
    }

    let displayMenu = projects.map(function(item) {
        return `<article class="project-card fade-in">
            <div class="card-thumb">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="card-content">
                <div class="card-tags">${item.tags.join(' • ')}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank" class="btn-project">
                    Ver Projeto Ao Vivo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </article>`;
    });

    displayMenu = displayMenu.join('');
    projectsContainer.innerHTML = displayMenu;
}

// Carregar inicial
window.addEventListener('DOMContentLoaded', () => {
    displayProjects(portfolioData);
});

// Sistema de Filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove classe active de todos e adiciona no clicado
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const category = e.currentTarget.dataset.filter;
        
        // Filtra o array
        if(category === 'all') {
            displayProjects(portfolioData);
        } else {
            const filteredProjects = portfolioData.filter(project => project.category === category);
            displayProjects(filteredProjects);
        }
    });
});