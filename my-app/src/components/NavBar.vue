<script>

export default ({
})
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
  </nav>
</template>

<style scoped>
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #984ad8;
    }
  }
}
</style>