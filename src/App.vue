<template>
  <div id="app">
    <Boxplot :data='data' />
  </div>
</template>

<script>
import Boxplot from './components/Boxplot.vue'

export default {
  name: 'app',
  components: {
    Boxplot
  },
  data:()=>{
    return {
      data:{
        'test1':[1,3,5,7,9],
        'test2':[10,20,55,80,100]
      },
    }
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
  display: flex;
  justify-content: center;
}
</style>
