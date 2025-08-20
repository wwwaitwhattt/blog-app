<script>

</script>

<template>
    <button class="button button--red">
      <slot></slot>
    </button>
</template>

<style lang="scss">
button {
@include button-base
}

.button--red {
  background-color: #f1594e;
  color: #f9f9f9;
}
.button--red:hover {
  background-color: #f6382a;
}


</style>