<template>
    <MediaGallery :title="'Dirección de fotografía'" :navLinks="navLinks" :category="'photo'" />
</template>

<script>
import MediaGallery from "../components/MediaGallery.vue"

export default {
    name: "PhotoView",
    components: { MediaGallery },
    data() {
        return {
            navLinks: [
                { path: "/direccion", label: "Dirección" },
                { path: "/direccion-fotografia", label: "Dirección de fotografía" },
                { path: "/video-ensayos", label: "Vídeo ensayos" },
            ],
        }
    },
}
</script>