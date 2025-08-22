<template>
  <div class="container">
    <div class="post-view" v-if="post">
      <h1 class="post-view__title">{{ post.title }}</h1>
      <p class="post-view__content">{{ post.content }}</p>
      <div class="post-view__meta">
        <div class="post-view__meta-date">{{post.date}}</div>
        <div class="post-view__meta-author">{{post.author}}</div>
      </div>
      <div class="post-view__actions">
        <button-default>Edit</button-default>
        <button-red>Delete</button-red>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonRed from "@/components/ButtonRed";
import ButtonDefault from "@/components/ButtonDefault";

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
