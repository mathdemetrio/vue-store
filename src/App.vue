<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import "./assets/global.scss";
</style>
