<template>
  <div class="header">
    <nav class="header__navbar">
      <ul class="header__navbar__list">
        <li
            v-for="link in links"
            :key="link.id"
            class="header__navbar__item"
        >
          <router-link :to="link.to">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      links: [
        {id: 1, name: "Home", to: "/"},
        {id: 2, name: "About", to: "/about"},
        {id: 3, name: "Blog", to: "/blog"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.header__navbar {
  padding: 30px;

  &__list {
    display: flex;
    justify-content: center;
  }

  &__item {
    font-weight: bold;
    color: $color-text;
    margin: 0 10px;

    .router-link-exact-active {
      color: $color-secondary;
    }
  }
}
</style>