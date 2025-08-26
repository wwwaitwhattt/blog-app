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
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}

</style>