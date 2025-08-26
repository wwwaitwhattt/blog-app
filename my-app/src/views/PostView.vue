<template>
    <div class="post-view" v-if="post">
      <h1 class="post-view__title">{{ post.title }}</h1>
      <p class="post-view__content">{{ post.content }}</p>
      <div class="post-view__meta">
        <div class="post-view__meta-date">{{post.date}}</div>
        <div class="post-view__meta-author">{{post.author}}</div>
      </div>
      <div class="post-view__actions">
        <button-default @click="$router.push({name: 'edit', params: {id:post.id}})"
                        :green="true"
        >Edit</button-default>
        <button-default @click="onDelete"
                        :red="true"
        >Delete</button-default>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import ButtonDefault from "@/components/UI/ButtonDefault";

export default {
  components: {
    ButtonDefault
  },
 data() {
   return {
   }
 },
  computed: {
   ...mapGetters(["getPostById"]),
    post() {
     const id = Number(this.$route.params.id);
     return this.getPostById(id);
    }
  },
  methods: {
    ...mapMutations(['deletePost']),
    onDelete() {
      this.deletePost(this.post.id);
      this.$router.push({name: 'blog'})
    },
  }
}
</script>

<style scoped lang="scss">

.post-view {
  @include post-card;
  gap: 20px;

  &__title{
    font-weight: 700;
  }

  &__content {
    text-align: left;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    color: rgba(44, 62, 80, 0.7);
  }

}
</style>
