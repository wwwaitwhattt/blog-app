<script>

</script>

<template>
    <button class="button--green">
      <slot></slot>
    </button>
</template>

<style scoped>
.button--green {
  background-color: rgba(41, 152, 30, 0.76);
  color: #f9f9f9;
}

.button--green:hover {
  background-color: rgb(41, 152, 30);
}
</style>