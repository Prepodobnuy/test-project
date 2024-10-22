<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  count: number;
}>();

const caption = computed(() => {
  if (props.count === 1) {
    return "комментарий";
  } else if (props.count >= 2 && props.count <= 4) {
    return "комментария";
  } else {
    return "комментариев";
  }
});
</script>

<template>
  <h1 class="text-h1">{{ props.count }} {{ caption }}</h1>
</template>