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
  flex: 1; /* 讓 main 撐開中間區域 */
  width: 100%;
}

footer {
  width: 100%;
}
</style>