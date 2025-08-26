<template>
    <div class="add-post">
      <h1 class="add-post__title">New post</h1>
      <form class="add-post__form" @submit.prevent="onSubmit">
        <input type="text"
               id="title"
               placeholder="Title"
               v-model="newPost.title"
               class="add-post__input"
               required
        />
        <textarea
               id="content"
               placeholder="Content"
               v-model="newPost.content"
               class="add-post__input input-textarea"
               required
        >
        </textarea>
        <input type="text"
               id="author"
               placeholder="Author"
               v-model="newPost.author"
               class="add-post__input"
               required
        />

        <div class="add-post__actions">
          <ButtonDefault type="submit">Save</ButtonDefault>
          <ButtonRed type="button" @click="onCancel">Cancel</ButtonRed>
        </div>
      </form>
    </div>
</template>

<script>
import ButtonDefault from '@/components/UI/ButtonDefault.vue'
import ButtonRed from '@/components/UI/ButtonRed.vue'
import {mapMutations} from "vuex";

export default {
  components: {
    ButtonDefault,
    ButtonRed,
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
      this.$router.push('/blog')
    }
  }
}
</script>

<style scoped lang="scss">

.add-post{

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
    flex-flow: column wrap;
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
