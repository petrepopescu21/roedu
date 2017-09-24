<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Nav.vue'
import NavDark from '~/components/NavDark.vue'
import MyFooter from '~/components/Footer.vue'
export default {
  components: {
    MyFooter, Navbar, NavDark
  }
}
</script>

<style>


</style>
