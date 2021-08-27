<template>
  <div class="container">
    <div class="product-grid">
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  }
}
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>