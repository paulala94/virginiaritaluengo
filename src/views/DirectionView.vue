<template>
    <MediaGallery :title="'Dirección'" :navLinks="navLinks" :category="'direction'" />
</template>

<script>
import MediaGallery from "../components/MediaGallery.vue"

export default {
    name: "DirectionView",
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