<template>
    <TitleLetters />
    <HomeMenu />
</template>

<script>
import TitleLetters from '../components/Home/TitleLetters.vue'
import HomeMenu from '@/components/Home/HomeMenu.vue'

export default {
    name: 'HomeView',
    components: {
        TitleLetters,
        HomeMenu
    }
}
</script>

<style scoped></style>