<template>
    <div class="home-view">
      <section class="home-view__hello">
        <h1 class="hello__title">Welcome!</h1>
        <p class="hello__text">Open Blog to share your thoughts and checkout other's!</p>
      </section>

       <section class="home-view__latest">
          <h2 class="latest__title">What's new</h2>
          <div v-for="post in latestPosts"
               :key="post.id"
               class="latest__post-preview"
               @click="$router.push({name: 'post', params: { id:post.id } })"
          >
            <h3 class="latest__post-title">{{ post.title }}</h3>
            <p class="latest__post-content">{{ post.content.slice(0, 100) }}...</p>
          </div>
          <router-link :to="{name: 'blog'}">Show all →</router-link>
        </section>

        <section class="home-view__about">
          <h2>About me</h2>
          <p>Heeey!</p>
          <router-link :to="{name: 'about'}">Read more about me</router-link>
        </section>
    </div>
</template>

<script>
export default {
  computed: {
    latestPosts() {
      return this.$store.state.posts.slice(-3).reverse()
    }
  }
}
</script>

<style scoped lang="scss">
.home-view{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__latest {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 40px 0;
    gap: 20px;
  }

}

.hello__title {
  font-weight: 700;
  font-size: 2em;
}

.latest__post-preview {
  @include post-card
}

</style>
