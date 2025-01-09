<template>
    <div class="links">
        <ul>
            <li><router-link to="/direccion"><img src="../../assets/star.png" alt="">Dirección</router-link>
            </li>
            <li><router-link to="/direccion-fotografia"><img src="../../assets/star.png" alt="">Dirección
                    de
                    fotografía</router-link></li>
            <li><router-link to="/video-ensayos"><img src="../../assets/star.png" alt="">Vídeo
                    ensayos</router-link>
            </li>
            <li><router-link to="/sobre-mi">Sobre mí <img src="../../assets/star.png" alt=""> </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeMenu',
}
</script>

<style scoped>
img {
    padding-right: 10px;
    width: 16px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.links ul li {
    margin-bottom: 15px;
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.links a:hover {
    color: red;
}

.links a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;
}

.links a.active {
    color: red;
}

/* MEDIA QUERIES */

/* Para pantallas grandes (mayores a 1024px) */
@media only screen and (min-width: 1024px) {
    .links {
        flex-direction: row;
        margin-top: -80px;
    }

    .links ul li {
        margin-right: 20px;
    }

    li img {
        width: 16px;
    }
}

/* Para pantallas móviles (menos de 1024px) */
@media only screen and (max-width: 1024px) {
    .links {
        position: static;
        bottom: 0;
        flex-direction: column;
    }

    li img {
        width: 10px;
    }

    .links a {
        font-size: 15px;
    }
}
</style>