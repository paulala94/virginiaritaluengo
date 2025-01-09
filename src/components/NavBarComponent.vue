<template>
    <nav>
        <div class="nav-links">
            <router-link v-for="link in navLinks" :key="link.path" :to="link.path" class="nav-link"
                :class="{ 'active-category': activeCategory === link.label }">
                <img src="../assets/star.png" alt="">{{ link.label }}
            </router-link>
        </div>
        <div class="about-btn">
            <router-link to="/sobre-mi">
                <img src="../assets/grande-virginiaestrella.png" alt="Sobre mí">
            </router-link>
        </div>
    </nav>
</template>
<script>
export default {
    name: "NavBarComponent",
    props: {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        navLinks: {
            type: Array,
            required: false,
            default: () => [],
        },
    },
    computed: {
        activeCategory() {
            return this.$route.query.category || null
        },
    },
}
</script>

<style scoped>
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding-left: 60px;
    padding-right: 30px;
}

.nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.nav-links a.active {
    color: red;
    font-size: 2em;
    font-weight: bold;
}

.nav-links a img {
    width: 24px;
    height: auto;
    margin-right: 5px;
}

.about-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.about-btn img {
    width: 150px;
    height: auto;
}

.about-btn img:hover {
    content: url('../assets/grande-virginiaestrellainvertido.png')
}

.nav-links a:hover {
    color: red;
}

.nav-link.active-category {
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
}

.title-container {
    margin-top: 20px;
    text-align: center;
}

.highlight-title {
    color: red;
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
}

@media (max-width: 1024px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
    }

    .nav-links {
        justify-content: center;
        gap: 15px;
        order: 1;
    }

    .about-btn img {
        width: 120px;
        order: 0;
    }
}

@media (max-width: 768px) {
    .nav-links a {
        font-size: 18px;
    }

    .nav-links a img {
        width: 20px;
    }

    .about-btn img {
        width: 100px;
    }
}

@media (max-width: 480px) {
    nav {
        align-items: center;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .nav-links a {
        font-size: 16px;
    }

    .about-btn {
        margin-top: 15px;
    }

    .about-btn img {
        width: 80px;
    }
}
</style>