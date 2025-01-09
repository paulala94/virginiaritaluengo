<template>
    <MediaGallery :title="'Vídeo Ensayos'" :navLinks="navLinks" :category="'essay'" :showFilters="false" />
</template>

<script>
import MediaGallery from "../components/MediaGallery.vue"

export default {
    name: "EssayView",

    components: { MediaGallery },
    data() {
        return {
            navLinks: [
                { path: '/direccion', label: 'Dirección' },
                { path: '/direccion-fotografia', label: 'Dirección de fotografía' },
                { path: '/video-ensayos', label: 'Vídeo ensayos' },
            ],
            categoryTitle: 'Dirección de fotografía'
        }
    },
}
</script>