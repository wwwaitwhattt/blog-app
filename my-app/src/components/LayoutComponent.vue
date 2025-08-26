<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
}

</style>