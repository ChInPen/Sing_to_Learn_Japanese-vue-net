<template>
  <div v-if="visible" class="overlay" @click.self="$emit('close')">
    <div class="custom-modal">
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ visible: Boolean })
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.custom-modal {
  background: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  max-width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
