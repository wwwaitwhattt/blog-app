<template>
    <div class="blog-view">
      <h1 class="blog-view__title">Blog Page</h1>
      <p class="blog-view__description">Here you can view all community posts.</p>

      <router-link :to="{name: 'add'}">
        <ButtonDefault>Add</ButtonDefault>
      </router-link>

      <div class="blog-view__content">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
</template>

<script>
import ButtonDefault from "@/components/UI/ButtonDefault.vue";
import PostCard from "@/components/PostCard";
import { mapGetters } from "vuex";

export default {
  components: {
    ButtonDefault,
    PostCard,
  },
  computed: {
    ...mapGetters(['getAllPosts']),
    posts() {
      return this.getAllPosts
    }
  }
}
</script>

<style scoped lang="scss">

.button--default {
  margin-bottom: 20px;
  display: inline-block;

}

.blog-view__title {
  font-weight: 700;
}

.blog-view__title, .blog-view__description {
  margin-bottom: 20px;
}

.blog-view__content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
}

</style>
