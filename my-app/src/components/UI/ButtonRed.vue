<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<template>
    <button class="button--red"
            @click="$emit('click', $event)"
            v-bind="$attrs">
      <slot/>
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