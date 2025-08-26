<template>
  <footer class="app-footer">
    <div class="container">

    </div>
      <p class="footer__text">© 2025 This is my personal project for Vue2 studies. Check my <a href="https://github.com/wwwaitwhattt">GitHub</a></p>
      <nav class="footer__navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
        </ul>
      </nav>
  </footer>
</template>

<script>
</script>

<style scoped lang="scss">
.app-footer {
  background: $color-secondary;
  color: #fff;
  padding: 20px 0;
  width: 100%;
  text-align: center;
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
