<template>
    <div class="back">
        <router-link to="javascript:history.back()">
            <img src="../assets/flecha.png" alt="">
        </router-link>
    </div>
</template>

<style scoped>
.back {
    margin-top: 40px;
    text-align: center;
}

.back img {
    width: 3%;
}

.back img:hover {
    content: url('../assets/estrellaflecha.png');
}
</style>