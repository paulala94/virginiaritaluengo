<template>
    <div class="letters-container">
        <router-link to="/sobre-mi" id="virginia">
            <img src="../../assets/virginiazul.png" alt="Virginia" />
        </router-link>
        <router-link to="/sobre-mi" id="rita">
            <img src="../..//assets/ritazul.png" alt="Rita" />
        </router-link>
        <router-link to="/sobre-mi" id="luengo">
            <img src="../..//assets/luengoazul.png" alt="Luengo" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: "LettersComponent",
};
</script>

<style scoped>
.letters-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
    margin-top: -60px;
}

#virginia {
    margin-top: 200px;
}

#luengo {
    margin-top: 333px;
}

#virginia img:hover {
    content: url('../..//assets/virginiarojo.png')
}

#rita img:hover {
    content: url('../..//assets/ritarojo.png')
}

#luengo img:hover {
    content: url('../..//assets/luengorojo.png')
}

@media only screen and (max-width:599px) {
    .letters-container {
        flex-direction: column;
        gap: 10px;
        margin-top: 50px;
    }

    #virginia {
        margin-top: 0px;
    }

    #luengo {
        margin-top: 0px;
    }
}

@media only screen and (max-width:999px) {
    .letters-container {
        gap: 10px;
        margin-top: 50px;
    }

    .letters-container img {
        width: 80%;
    }

}
</style>
