<template>
    <div class="about-page">
      <h1 class="about__title">About</h1>
      <p class="about__description">
        Это простой блог на Vue.js, сделанный в учебных целях.
        Исходный код проекта доступен на GitHub:
      </p>
      <p class="about__description">
        <a href="https://github.com/wwwaitwhattt/blog-app" target="_blank">
          GitHub репозиторий
        </a>
      </p>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

.about__description a {
  color: $color-secondary;
  text-decoration: none;
  font-weight: bold;
}

.about__description a:hover {
  text-decoration: underline;
}
</style>
