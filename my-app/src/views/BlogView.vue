<template>
  <div class="container">
    <div class="blog-view">
      <h1 class="blog-view__title">Blog Page</h1>
      <p class="blog-view__description">Here you can view all community posts.</p>
      <div class="blog-view__content">
        <div class="post-card"
             v-for="post in posts"
             :key="post.id"
        >
          <h2 class="post-card__title">{{ post.title }}</h2>
          <p class="post-card__content">{{ post.content.slice(0,200) }}...</p>
          <router-link :to="`/blog/${post.id}`">Read more</router-link>
          <div>

          </div>
          <small class="post-card__meta">{{post.date}}, {{post.author}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {posts} from "@/store/posts";

export default {
  data() {
    return {
      posts
    }
  }
}
</script>

<style scoped lang="scss">

.blog-view__title, .blog-view__description {
  margin-bottom: 20px;
}

.blog-view__content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
}

.blog-view__post-card {
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  width: 49%;

  &__title {
    margin-bottom: 10px;
  }

  &__content {
    text-align: left;
  }
}

</style>
