<template>
  <footer class="app-footer">
      <p class="footer__text">© 2025 This is my personal project for Vue2 studies. Check my <a href="https://github.com/wwwaitwhattt">GitHub</a></p>
      <nav class="footer__navbar">
        <ul class="navbar__list">
          <li class="navbar__item"
              v-for="link in links"
              :key="link.id"
          >
            <router-link :to="link.to">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return{
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
.app-footer {
  background: $color-secondary;
  color: #fff;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.footer__text a{
  color: $color-secondary-hover;
}

.footer__text a:hover{
  color: #fff;
}

.footer__navbar {
  margin-top: 10px;

  .navbar__list{
    display: flex;
    justify-content: center;
  }
  a {
    font-weight: bold;
    margin: 0 10px;

    &.router-link-exact-active {
      color: $color-secondary-hover;
    }
  }
}
</style>
