<template>
    <div id="media-gallery">
        <NavBarComponent :title="title" :navLinks="navLinks" />

        <div class="category-title">
            <p>{{ title }}</p>
        </div>

        <DataFilter v-if="showFilters" :filters="availableFilters" @filter-changed="handleFilterChange"
            :activeFilter="activeFilter" />


        <div class="container">
            <div class="projects-grid">
                <div v-for="project in filteredProjects" :key="project.id" class="project-card"
                    :class="{ 'closed-project': !project.open }" @click="project.open && goToProject(project.title)">
                    <img :src="project.coverImage" alt="Project Image" class="project-image" />
                    <p class="project-title">{{ project.title }}</p>
                </div>
            </div>

            <div class="back">
                <router-link to="/">
                    <img src="../assets/flecha.png" alt="Back" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarComponent from "./NavBarComponent.vue";
import DataFilter from "./DataFilter.vue";

export default {
    name: "MediaGallery",
    components: {
        NavBarComponent,
        DataFilter,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        navLinks: {
            type: Array,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        showFilters: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            filters: [
                { value: "all", label: "Todos" },
                { value: "fiction", label: "Ficción" },
                { value: "videoclip", label: "Videoclip" },
                { value: "fashion-film", label: "Fashion Film" },
                { value: "documentary", label: "Documental" },
            ],
            activeFilter: "all",
            projects: null,
        };
    },
    computed: {
        filteredProjects() {
            if (!this.projects) return [];
            return this.projects.filter((project) => {
                const matchesCategory = this.category === "all" || project.type === this.category;
                const matchesFilter =
                    this.activeFilter === "all" || project.categories.includes(this.activeFilter);
                return matchesCategory && matchesFilter;
            });
        },
        availableFilters() {
            if (!this.projects) return [];
            const translations = {
                fiction: "Ficción",
                videoclip: "Videoclip",
                "fashion-film": "Fashion Film",
                documentary: "Documental",
            };

            const categories = new Set();
            this.projects.forEach((project) => {
                project.categories.forEach((category) => {
                    if (category !== "essay") categories.add(category);
                });
            });

            return Array.from(categories).map((category) => ({
                value: category,
                label: translations[category] || category,
            }));
        },
    },
    methods: {
        goToProject(title) {
            this.$router.push({
                name: "ProjectDetail",
                params: { id: title },
                query: { category: this.category },
            });
        },
        loadProjects() {
            fetch("/projects.json")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    this.projects = data.projects;
                })
                .catch((error) => console.error("Error cargando los proyectos:", error));
        },
        handleFilterChange(filterValue) {
            this.activeFilter = this.activeFilter === filterValue ? "all" : filterValue;
        },
    },
    mounted() {
        this.loadProjects();
    },
};
</script>


<style scoped>
#media-gallery {
    padding: 40px 0;
}

.nav-links {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    margin: 0 15px;
    font-size: 16px;
    font-weight: bold;
}

.nav-links a:hover {
    color: #007bff;
}

.category-title {
    text-align: center;
    color: red;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

#media-filters {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.filter-div {
    background-color: #fff;
    padding: 8px 16px;
    margin: 0 10px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.filter-div.active,
.filter-div:hover {
    background-color: #007bff;
    color: white;
}

.container {
    margin-top: 40px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 0 15px;
}

.projects-grid a {
    text-decoration: none;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
}

.project-image {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:not(.closed-project):hover {
    cursor: pointer;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.project-title {
    font-size: 14px;
    font-style: italic;
    text-align: center;
    color: #4F4F4F;
    padding: 10px;
    margin: 0;
}

.back {
    margin-top: 40px;
    text-align: center;
}

.back img {
    width: 3%;
    transition: all 0.3s ease;
}

.back img:hover {
    content: url('../assets/estrellaflecha.png');
}

@media (max-width: 768px) {
    .category-title {
        font-size: 20px;
    }

    .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .project-title {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    #media-gallery {
        padding: 0;
    }

    .container {
        margin-top: 0px;
    }

    .category-title {
        font-size: 18px;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .project-title {
        font-size: 10px;
    }

    .back img {
        width: 10%;
    }
}
</style>
