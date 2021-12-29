<template>
  <div class="product-card">
    <div class="product-card__cover">
      <img class="product__image" src="@/assets/images/product.jpg" alt="MDN">
      <span class="product__date">27 de Dezembro de 2021</span>
    </div>
    <div class="product-card__presentation">
      <h3 class="product__title">Homem-Aranha</h3>
      <span class="product__price">R$ 19,90</span>
    </div>
    <div class="product-card__actions">
      <button class="product__add-cart" type="button">Adicionar ao carrinho</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>