<script setup lang="ts">

</script>

<template>
  <button class="button--default">
    <slot></slot>
  </button>
</template>

<style scoped>
.button--default {
  background-color: rgba(255, 255, 255, 0.76);
  color: rgb(44, 62, 80);
}

.button--default:hover {
  background-color: rgb(232, 232, 232);
}
</style>