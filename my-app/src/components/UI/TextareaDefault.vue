<template>
    <textarea
        :id="id"
        :placeholder="placeholder"
        class="textarea__field"
        v-model="valueActions"
    />
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    value: String,
    id: String,
    placeholder: String,
  },
  computed: {
    valueActions: {
      set(value) {
        this.$emit("input", value)
      },
      get() {
        return this.value
      }
    }
  }
}
</script>

<style scoped lang="scss">
.textarea__field {
  @include input-box;
  height: 20rem;
  resize: none;
  overflow-y: auto;
}
</style>
