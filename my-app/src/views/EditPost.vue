<template>
  <FormBlock
      v-model="updatedPost"
      title="Edit Post"
      @submit="onSubmit"
      @cancel="onCancel"
  ></FormBlock>
</template>

<script>
import FormBlock from "@/components/FormBlock";
import {mapGetters, mapActions} from "vuex";

export default {
  components: {
    FormBlock,
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
      this.updatedPost ={
        id: this.post.id,
        title: this.post.title,
        content: this.post.content,
        author: this.post.author,
        date: this.post.date,
      }
    }
  },
  methods: {
    ...mapActions(['editPost']),
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

  &__actions {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>
