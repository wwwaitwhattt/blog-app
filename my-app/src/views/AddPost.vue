<template>
    <div class="add-post">
      <h1 class="add-post__title">New post</h1>
      <form class="add-post__form" @submit.prevent="onSubmit">
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

        <div class="add-post__actions">
          <ButtonDefault type="submit"
                         :green="true"
          >Save</ButtonDefault>
          <ButtonDefault type="button"
                         @click="onCancel"
                         :red="true"
          >Cancel</ButtonDefault>
        </div>
      </form>
    </div>
</template>

<script>
import ButtonDefault from '@/components/UI/ButtonDefault';
import InputDefault from '@/components/UI/InputDefault';
import TextareaDefault from '@/components/UI/TextareaDefault';
import {mapMutations} from "vuex";

export default {
  components: {
    ButtonDefault,
    InputDefault,
    TextareaDefault,
  },
  data() {
    return {
      newPost: {
        title: '',
        content: '',
        author: '',
      }
    }
  },
  methods: {
    ...mapMutations(['addPost']),
    onSubmit() {
      const newPost = {
        title: this.newPost.title,
        content: this.newPost.content,
        author: this.newPost.author,
        id: Date.now(),
        date: new Date().toDateString(),
      }
      this.addPost(newPost)
      this.$router.back()
    },
    onCancel() {
      this.$router.push({name: 'blog'})
    }
  }
}
</script>

<style scoped lang="scss">

.add-post{
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  &__form {
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

  &__title {
    margin-bottom: 20px;
    font-weight: 700;
  }

  &__input {
    @include input-box
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}

.input-textarea {
  height: 20rem;
  resize: none;
  overflow-y: auto;
}
</style>
