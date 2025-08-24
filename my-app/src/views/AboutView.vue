<template>
  <div class="container">
    <div class="about-page">
      <h1>About</h1>
      <p>
        Это простой блог на Vue.js, сделанный в учебных целях.
        Исходный код проекта доступен на GitHub:
      </p>
      <p>
        <a href="https://github.com/wwwaitwhattt/blog-app" target="_blank">
          GitHub репозиторий
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.about {
  margin-top: 40px;
}

a {
  color: $color-secondary;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
