<template>
  <div id="app">
    <page></page>
  </div>
</template>

<script>
import Page from './components/Page.vue';
export default {
  components:{
    Page
  }
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
