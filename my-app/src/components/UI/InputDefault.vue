<template>
    <input :type="type"
           :id="id"
           :placeholder="placeholder"
           class="input__field"
           v-model="valueActions"
           required
    />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    id: String,
    value: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
  },
  computed: {
    valueActions: {
      set(value) {
        return this.$emit("input", value)
      },
      get() {
        return this.value
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input__field {
  @include input-box;
}
</style>