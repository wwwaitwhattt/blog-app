<template>
  <div class="app-form">
    <h1 class="form__title">{{ title }}</h1>
    <form class="form__block" @submit.prevent="onSubmit">
      <InputDefault
          id="title"
          placeholder="Title"
          v-model="newPost.title"
          required
      />
      <TextareaDefault
          id="content"
          placeholder="Content"
          v-model="newPost.content"
          required
      />
      <InputDefault
          id="author"
          placeholder="Author"
          v-model="newPost.author"
          required
      />

      <div class="form__actions">
        <ButtonDefault type="submit"
                       :green="true"
        >Save</ButtonDefault>
        <ButtonDefault type="button"
                       :red="true"
                       @click="onCancel"
        >Cancel</ButtonDefault>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonDefault from '@/components/UI/ButtonDefault';
import InputDefault from '@/components/UI/InputDefault';
import TextareaDefault from '@/components/UI/TextareaDefault';

export default {
  name: 'PostForm',
  components: {
    ButtonDefault,
    InputDefault,
    TextareaDefault,
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        title: "",
        content: "",
        author: ""
      })
    },
    title: {
      type: String,
      default: "New Post"
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.newPost)
    },
    onCancel() {
      this.$emit("cancel", this.newPost)
    }
  },
  computed: {
    newPost: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("input", value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.app-form{
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.form__title {
  margin-bottom: 20px;
  font-weight: 700;
}

.form__block{
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    min-width: 280px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.form__actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
