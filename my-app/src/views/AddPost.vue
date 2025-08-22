<template>
  <div class="container">
    <div class="add-post">
      <h1 class="add-post__title">New post</h1>
      <form class="add-post__form" @submit.prevent="onSubmit" novalidate>
        <label for="title" class="add-post__label">Title</label>
        <input type="text"
               id="title"
               placeholder="Title"
               v-model="newPost.title"
               class="add-post__input"
               required
        />

        <label for="content" class="add-post__label">Content</label>
        <textarea
               id="content"
               placeholder="Content"
               v-model="newPost.content"
               class="add-post__textarea"
               required
        >
        </textarea>

        <label for="author" class="add-post__label">Author</label>
        <input type="text"
               id="author"
               placeholder="Author"
               v-model="newPost.author"
               class="add-post__input"
               required/>

        <div class="add-post__actions">
          <button-default type="submit">Save</button-default>
          <button-red type="button" @click="$router.push('/blog')">Cancel</button-red>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonDefault from '@/components/ButtonDefault'
import ButtonRed from '@/components/ButtonRed'
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
    }
  }
}
</script>

<style scoped lang="scss">

.add-post__form {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  min-width: 280px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  flex-flow: column wrap;

  .add-post__label {
  }
}
</style>
