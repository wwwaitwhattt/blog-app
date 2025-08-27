<template>
    <div class="about-page">
      <h1 class="about-page__title">About</h1>
      <p class="about-page__description">
        Simple Vue2 project. Made for my study.
        Source code available on GitHub:
      </p>
      <p class="about-page__description">
        <a
            class="about-page__link"
            href="https://github.com/wwwaitwhattt/blog-app" target="_blank">
          GitHub repository
        </a>
      </p>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

.about-page {
  max-width: 800px;
  margin: 0px auto;

  &__title {
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__description {
    margin-bottom: 15px;

    a.about-page__link {
      color: $color-secondary;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        color: $color-secondary-hover;
      }
    }
  }
}


</style>
