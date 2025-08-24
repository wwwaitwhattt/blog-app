<template>
  <footer class="app-footer">
    <div class="container">
      <p>© 2025 This is my personal project for Vue2 studies. Check my <a href="https://github.com/wwwaitwhattt">GitHub</a></p>
      <nav class="footer-nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped lang="scss">
.app-footer {
  background: $color-secondary;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 60px;
}

p a{
  color: $color-secondary-hover;
}

p a:hover{
  color: #fff;
}


nav {
  margin-top: 10px;

  a {
    font-weight: bold;
    margin: 0 10px;

    &.router-link-exact-active {
      color: $color-secondary-hover;
    }
  }
}
</style>
