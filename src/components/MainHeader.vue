<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink class="home-href">
      ikakprosto.ru
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 76px;

  .home-href {
    color: var(--color-accent-primary);
    font-family: "SF Pro Display";
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    user-select: none;
  }
}
</style>