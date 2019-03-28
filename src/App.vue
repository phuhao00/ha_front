<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {Footer, Nav}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
