<template>
  <div id="app">
    <LayoutDefault>
      <template v-slot:header>
        <Header/>
      </template>
      <router-view></router-view>
      <template v-slot:footer>
        <Footer/>
      </template>
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from "@/components/LayoutDefault";
import Header from "@/components/HeaderBlock"
import Footer from "@/components/FooterBlock"

export default ({
  components: {
    LayoutDefault,
    Header,
    Footer,
  }
})

</script>