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
          <div class="post-card__meta">
            <div class="post-card__meta-date">{{post.date}}</div>
            <div class="post-card__meta-author">{{post.author}}</div>
          </div>
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

.post-card {
  @include post-card;

  &__title {
    margin-bottom: 10px;
  }

  &__content {
    text-align: left;
  }

  &__meta {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: $font-size-small;
  }
}

</style>
