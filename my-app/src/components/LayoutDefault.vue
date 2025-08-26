<template>
  <div class="wrapper">
    <slot name="header"/>
    <LayoutComponent>
      <slot></slot>
    </LayoutComponent>
    <slot name="footer"/>
  </div>
</template>

<script>
import LayoutComponent from './LayoutComponent';

export default {
  components: {
    LayoutComponent
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

</style>