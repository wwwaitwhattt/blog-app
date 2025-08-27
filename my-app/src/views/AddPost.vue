<template>
  <FormBlock
      v-model="newPost"
      title="New Post"
      @submit="onSubmit"
      @cancel="onCancel"

  ></FormBlock>
</template>

<script>
import FormBlock from '@/components/FormBlock';
import { mapActions } from "vuex";

export default {
  components: {
    FormBlock,
  },
  data() {
    return {
      newPost: {
        title: "",
        content: "",
        author: "",
      },
    }
  },
  methods: {
    ...mapActions(['addPost']),
    onCancel() {
      this.$router.push({name: 'blog'})
    },
    onSubmit(){
      const newPost = {
        title: this.newPost.title,
        author: this.newPost.author,
        content: this.newPost.content,
        id: Date.now(),
        date: new Date().toDateString()
      }
      this.addPost(newPost);
      this.$router.push({name: 'blog'});
    }
  }
}
</script>

<style scoped lang="scss">


</style>
