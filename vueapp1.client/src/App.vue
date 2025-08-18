<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from "./components/Modal/Header.vue";
import Footer from "./components/Modal/Footer.vue";
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  background: #000000;
}


#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  width: 100%;
}

main {
  flex: 1;
  width: 100%;
}

footer {
  width: 100%;
}
</style>