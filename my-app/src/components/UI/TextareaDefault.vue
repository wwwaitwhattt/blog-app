<template>
  <div class="base-textarea">
    <textarea
        :id="id"
        :placeholder="placeholder"
        class="base-textarea__field"
        v-model="valueActions"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    id: String,
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
.base-textarea__field {
  @include input-box;
  height: 20rem;
  resize: none;
  overflow-y: auto;
}
</style>
