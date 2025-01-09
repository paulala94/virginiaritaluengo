<template>
    <div v-if="project" class="container-project">
        <NavBarComponent :title="title" :navLinks="navLinks" />

        <p class="category-title">{{ previousCategory }}</p>
        <div class="cover-project">
            <div v-if="isYouTubeVideo">
                <iframe :src="videoUrl" width="560" height="315" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div v-else-if="isVimeoVideo">
                <iframe :src="videoUrl" width="560" height="315" title="Vimeo video player" frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div v-else-if="project.images && project.images.length">
                <div class="slider">
                    <button class="prev" @click="prevSlide">&#10094;</button>
                    <div class="slides">
                        <img v-for="(image, index) in project.images" :key="index" :src="image" :alt="'Slide ' + index"
                            :style="{ display: index === currentSlide ? 'block' : 'none' }" />
                    </div>
                    <button class="next" @click="nextSlide">&#10095;</button>
                </div>
            </div>

            <div class="info-project">
                <h2>{{ project.title }}</h2>
                <p v-if="project.dir"><strong>Dir.</strong> {{ project.dir }}</p>
                <p v-if="project.photo"><strong>Dirección de fotografía.</strong> {{ project.photo }}</p>
                <a v-if="project.imdb" :href="project.imdb" target="_blank" rel="noopener noreferrer">IMDb</a>
            </div>
        </div>
        <BackArrow />
    </div>

    <div v-else class="error-message">
        <p>El proyecto no existe o no pudo ser cargado.</p>
        <router-link to="/">Volver al inicio</router-link>
    </div>
</template>

<script>
import BackArrow from './BackArrow.vue'
import NavBarComponent from './NavBarComponent.vue'

export default {
    name: 'ProjectDetail',
    components: {
        BackArrow,
        NavBarComponent
    },
    props: {
        title: {
            type: String,
            required: true,
        },

    },
    data() {
        return {
            project: null,
            currentSlide: 0,
            category: this.$route.query.category || 'Proyecto',
            navLinks: [
                { path: "/direccion", label: "Dirección" },
                { path: "/direccion-fotografia", label: "Dirección de fotografía" },
                { path: "/video-ensayos", label: "Vídeo ensayos" },
            ],
        }
    },
    computed: {

        previousCategory() {
            const translations = {
                photo: "Dirección de fotografía",
                essay: "Vídeo ensayo",
                direction: "Dirección",
            }
            return translations[this.$route.query.category] || "Sin categoría"
        },
        activeCategory() {
            return this.$route.query.category || null
        },
        isYouTubeVideo() {
            return this.project && this.project.youtube && (this.project.youtube.includes("youtube.com") || this.project.youtube.includes("youtu.be"))
        },
        isVimeoVideo() {
            return this.project && this.project.vimeo && this.project.vimeo.includes("vimeo.com")
        },
        videoUrl() {
            if (this.isYouTubeVideo) {
                const youtubeEmbedBase = "https://www.youtube.com/embed/"
                return this.project.youtube.includes("watch?v=")
                    ? this.project.youtube.replace("watch?v=", "embed/")
                    : youtubeEmbedBase + this.project.youtube.split("/").pop()
            } else if (this.isVimeoVideo) {
                const vimeoEmbedBase = "https://player.vimeo.com/video/"
                return this.project.vimeo.includes("vimeo.com/video/")
                    ? this.project.vimeo
                    : vimeoEmbedBase + this.project.vimeo.split("/").pop()
            }
            return null
        },
    },
    methods: {
        loadProject() {
            const projectId = decodeURIComponent(this.$route.params.id);
            fetch("/projects.json")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    const project = data.projects.find((p) => p.title === projectId);
                    if (project) {
                        this.project = project;
                    } else {
                        console.error("Proyecto no encontrado");
                    }
                })
                .catch((error) => {
                    console.error("Error cargando el proyecto:", error);
                });
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.project.images.length
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.project.images.length) % this.project.images.length
        },
    },
    mounted() {
        this.loadProject()
    },
}
</script>


<style scoped>
strong {
    color: blue;
}

a {
    color: red;
    text-decoration: none;
}

.category-title {
    text-align: center;
    color: red;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
}

.container-project {
    margin-top: 20px;
}

.cover-project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.info-project h2 {
    color: blue;
    font-size: 19px;
    font-weight: 400;
    font-style: italic;
    text-align: center;
}

.slider {
    position: relative;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
}

.slider .prev,
.slider .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: blue;
    background-color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s ease;
}

.slider .prev {
    left: 10px;
}

.slider .next {
    right: 10px;
}

.slider .slides img {
    display: none;
    width: 80%;
    margin: auto;
}

.slider .slides img:first-child {
    display: block;
}

@media (max-width: 768px) {
    .category-title {
        font-size: 24px;
    }

    .cover-project iframe {
        max-width: 100%;
    }

    .info-project h2 {
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .category-title {
        font-size: 20px;
    }

    .info-project h2 {
        font-size: 14px;
    }

    .slider .prev,
    .slider .next {
        padding: 5px 10px;
        font-size: 14px;
    }
}
</style>