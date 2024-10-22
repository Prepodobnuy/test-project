<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="home-href">
      ikakprosto.ru
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 86px;
  margin-bottom: 10px;

  .home-href {
    color: var(--color-accent-primary);
    font-family: "SF Pro Display";
    cursor: pointer;
    height: 76px;
    margin-top: 10px;
    line-height: 38px;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    user-select: none;
  }
}
</style>