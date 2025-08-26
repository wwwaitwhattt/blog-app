<template>
    <div class="post-view" v-if="post">
      <h1 class="post-view__title">{{ post.title }}</h1>
      <p class="post-view__content">{{ post.content }}</p>
      <div class="post-view__meta">
        <div class="post-view__meta-date">{{post.date}}</div>
        <div class="post-view__meta-author">{{post.author}}</div>
      </div>
      <div class="post-view__actions">
        <button-default @click="$router.push(`/edit/${post.id}`)">Edit</button-default>
        <button-red @click="onDelete">Delete</button-red>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import ButtonRed from "@/components/UI/ButtonRed.vue";
import ButtonDefault from "@/components/UI/ButtonDefault.vue";

export default {
  components: {
    ButtonDefault,
    ButtonRed,
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
      this.$router.push('/blog');
    },
  }
}
</script>

<style scoped lang="scss">

.post-view {
  @include post-card;
  gap: 20px;

  &__content {
    text-align: left;
  }

  &__actions {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;
  }

  &__meta {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: rgba(44, 62, 80, 0.7);
  }

}


</style>
