<template>
    <div class="edit-post">
      <h1 class="edit-post__title">Edit post</h1>
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
          <button-default type="submit"
                          :green="true"
          >Save</button-default>
          <button-default type="button"
                          @click="onCancel"
                          :red="true"
          >Cancel</button-default>
        </div>
      </form>
    </div>
</template>

<script>
import ButtonDefault from '@/components/UI/ButtonDefault.vue'
import {mapGetters, mapMutations} from "vuex";

export default {
  components: {
    ButtonDefault,
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
      this.$router.push({name: 'blog'})
    },
    onCancel() {
      this.$router.push({name: 'blog'})
    }
  }
}
</script>

<style lang="scss">
.edit-post {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &__title {
    margin-bottom: 20px;
    font-weight: 700;

  }

  &__input {
    @include input-box;
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
