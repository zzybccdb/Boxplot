<template>
  <div id="app">
    <Boxplot/>
  </div>
</template>

<script>
import Boxplot from './components/Boxplot.vue'

export default {
  name: 'app',
  components: {
    Boxplot
  },
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
  display: flex;
  justify-content: center;
}
</style>
