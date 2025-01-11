<template>
    <div id="container-about">
        <h1>Virginia Rita Luengo</h1>
        <div id="info">
            <img src="../assets/fotobio.jpg" alt="Virginia Rita Luengo">
        </div>
        <div class="info-box">
            <p>
                Licenciada en Comunicación Audiovisual en la Universidad Carlos III de Madrid y diplomada en dirección
                de
                fotografía por la Escuela de Cine de Madrid (ECAM). Su interés principal es la <strong>narración
                    visual</strong>: entender cómo se puede hablar a través de las imágenes para contar las
                <strong>historias</strong> desde la <strong>emoción</strong> y no la teoría.

                Profesionalmente se ha desenvuelto en ambientes diversos. Realizó prácticas de programación en la
                <strong>Filmoteca Española</strong> como editora de trailers.

                En rodajes ha tenido la oportunidad de explorar los diversos campos del cine como
                <strong>directora</strong> y <strong>directora de fotografía</strong> en diferentes cortometrajes,
                documentales y videoclips. En muchos de estos proyectos también ha sido responsable de su edición y
                <strong>etalonaje</strong>.
            </p>
        </div>
        <div id="about-links">
            <ul>
                <li><a href="https://www.instagram.com/virginiarit4/"><img src="../assets/star.png" alt="">Instagram</a>
                </li>
                <li><a href="https://www.imdb.com/name/nm15791950/?language=es-es"><img src="../assets/star.png"
                            alt="">IMDb</a></li>
                <li><a href="mailto:virginiaritaluengo@gmail.com">virginiaritaluengo@gmail.com</a><img
                        src="../assets/star.png" alt=""></li>
            </ul>
        </div>
        <div class="back">
            <router-link to="/" aria-label="Volver atrás">
                <img src='../assets/flecha.png' alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutView"
}
</script>

<style scoped>
p {
    color: #4f4f4f;
}

a {
    text-decoration: none !important;
    color: #000 !important;
}

ul {
    list-style-type: none;
    padding: 0;
}

li img {
    width: 1%;
    padding: 0 5px;
}

#container-about {
    width: 80%;
    margin: auto;
    margin-top: 50px;
}

#container-about h1 {
    text-align: center;
    margin-bottom: 20px;
    color: red;
}

#about-links {
    position: absolute;
    top: 255px;
}

#about-links a {
    font-size: 13px !important;
}

#about-links a:hover {
    color: red !important;
}

#about-links a img {
    width: 11px;
}

#info {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

#info img {
    width: 30%;
}

.info-box {
    width: 30%;
    padding: 20px;
    position: absolute;
    bottom: 90px;
    right: 40px;
    text-align: justify;
}

.info-box strong {
    color: blue;
}

.back {
    margin-top: 40px;
}

.back a {
    display: flex;
    justify-content: center;
}

.back img {
    width: 3%;
    transition: all 0.3s ease;
}

.back img:hover {
    content: url('../assets/estrellaflecha.png');
}

@media (max-width: 768px) {
    #info img {
        width: 150px;
    }

    .info-box {
        position: inherit;
        width: 90%;
        margin: auto;
        margin-top: 80px;
    }

    #about-links a {
        font-size: 12px;
    }

    .back img {
        width: 25px;
    }

    li img {
        width: 4%;
    }
}

@media (max-width: 480px) {
    #container-about h1 {
        font-size: 24px;
    }

    #info img {
        width: 120px;
    }

    .info-box {
        padding: 10px;
        font-size: 14px;
    }

    #about-links a {
        font-size: 11px;
    }

    .back img {
        width: 20px;
    }
}
</style>