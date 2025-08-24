<template>
  <div class="container">
    <div class="edit-post">
      <h1 class="edit-post__title">New post</h1>
      <form class="edit-post__form" @submit.prevent="onSubmit">
        <input type="text"
               id="title"
               placeholder="Title"
               v-model="updatedPost.title"
               class="edit-post__input"
               required
        />
        <textarea
            id="content"
            placeholder="Content"
            v-model="updatedPost.content"
            class="edit-post__input input-textarea"
            required
        >
        </textarea>
        <input type="text"
               id="author"
               placeholder="Author"
               v-model="updatedPost.author"
               class="edit-post__input"
               required
        />

        <div class="edit-post__actions">
          <button-default type="submit">Save</button-default>
          <button-red type="button" @click="onCancel">Cancel</button-red>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonDefault from '@/components/ButtonDefault'
import ButtonRed from '@/components/ButtonRed'
import {mapGetters, mapMutations} from "vuex";

export default {
  components: {
    ButtonDefault,
    ButtonRed,
  },
  data() {
    return {
      updatedPost: {
        title: '',
        content: '',
        author: '',
      }
    }
  },
  computed: {
    ...mapGetters(["getPostById"]),
    post() {
      const id = Number(this.$route.params.id);
      return this.getPostById(id);
    }
  },
  created() {
    if (this.post) {
      this.updatedPost = this.post;
    }
  },
  methods: {
    ...mapMutations(['editPost']),
    onSubmit() {
      this.editPost(this.updatedPost)
      this.$router.push('/blog')
    },
    onCancel() {
      this.$router.push('/blog')
    }
  }
}
</script>

<style lang="scss">

</style>
