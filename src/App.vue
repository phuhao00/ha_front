<template>
  <div id="app">
     <appHeader></appHeader>
    <router-view/>
  </div>
</template>
import appHeader from '@/components/Header'

<script>
export default {
  name: 'App'
}
</script>

<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
<!--<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">-->

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
