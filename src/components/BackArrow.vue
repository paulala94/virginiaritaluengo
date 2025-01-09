<template>
    <div class="back" @click="goBack">
        <img src="../assets/flecha.png" alt="Volver">
    </div>
</template>

<script>
export default {
    name: 'BackArrow',
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.back {
    margin-top: 40px;
    text-align: center;
    cursor: pointer;
}

.back img {
    width: 3%;
}

.back img:hover {
    content: url('../assets/estrellaflecha.png');
}
</style>
