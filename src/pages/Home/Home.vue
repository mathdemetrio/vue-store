<template>
  <div class="container">
    <div class="product-grid">
      <product-card :key="1"></product-card>
      <product-card :key="2"></product-card>
      <product-card :key="3"></product-card>
      <product-card :key="4"></product-card>
      <product-card :key="5"></product-card>
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