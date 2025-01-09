<template>
  <div id="app">
    <router-view></router-view>
    <div class="container">
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  box-sizing: border-box;
}

.container {
  width: 80%;
  max-width: 1200px;
  margin: auto;
}
</style>
