<template>
  <Index />
</template>

<script setup>
import Index from './components/index/Index.vue';
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; 
  box-sizing: border-box;
  background: linear-gradient(135deg, #101010 0%, #a5a5a5 100%);
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