<template>
  <router-link :to="{name:'post', params: { id:post.id } }"
               class="post-card"
  >
    <h2 class="post-card__title">{{ post.title }}</h2>
    <p class="post-card__content">{{ cutContent }}</p>
    <div class="post-card__meta">
      <div class="post-card__meta-date">{{post.date}}</div>
      <div class="post-card__meta-author">{{post.author}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
  },
  computed: {
    cutContent () {
      return this.post.content.slice(0,200) + '...'
    }
  }
}
</script>

<style scoped lang="scss">
.post-card {
  @include post-card;
  cursor: pointer;
  gap: 20px;

  &__content {
    text-align: left;
    flex: 1;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    font-size: $font-size-small;
    color: rgba(44, 62, 80, 0.7);
  }
}
</style>