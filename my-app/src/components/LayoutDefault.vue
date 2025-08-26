<template>
  <div class="wrapper">
    <slot name="header"/>
    <LayoutContainer>
      <slot></slot>
    </LayoutContainer>
    <slot name="footer"/>
  </div>
</template>

<script>
import LayoutContainer from './LayoutContainer';

export default {
  components: {
    LayoutContainer
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

</style>