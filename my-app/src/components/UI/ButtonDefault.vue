<template>
  <button class="button-default"
          :class="className"
          @click="click"
          v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    red: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    className(){
      return {
        'button-red': this.red,
        'button-green': this.green,
      }
    }

  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped lang="scss">

.button-default {
  @include button-base;
  background-color: rgba(255, 255, 255, 0.76);
  color: rgb(44, 62, 80);
  &:hover {
    background-color: rgb(232, 232, 232);
  }
}

.button-green {
  background-color: $color-btn-green;
  color: $color-bg;
  &:hover {
    background-color: $color-btn-green-hover;
  }
}

.button-red {
  background-color: $color-btn-red;
  color: $color-bg;
  &:hover {
    background-color: $color-btn-red-hover;
  }
}
</style>