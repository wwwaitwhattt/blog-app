<template>
  <div class="input-default">
    <input :type="type"
           :id="id"
           :placeholder="placeholder"
           class="input-default__field"
           v-model="valueActions"
           required
    />
  </div>
</template>

<script>
export default {
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
.input-default__field {
  @include input-box;
}
</style>