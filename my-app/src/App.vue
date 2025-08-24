<template>
  <div id="app">
    <NavBar/>
    <main class="content">
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/FooterBlock";
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar,
    Footer,
  }
}
</script>