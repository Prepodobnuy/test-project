<script lang="ts">
export default {
  props: {
    first: {
      type: Boolean
    },
    caption: {
      type: String
    }
  }
}
</script>

<template>
  <div :class="{ wrapper: true, first: first }">
    <div v-if="first" class="square"></div>
    <div class="caption text-caption">
      {{ caption }}
    </div>
  </div>

</template>

<style scoped lang="scss">
.wrapper {
  user-select: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  .square {
    width: 0;
    height: 0;
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    border-right: 8px solid var(--color-border);
    border-radius: 4px 0; 
  }

  .caption {
    line-height: 12px;
    background-color: var(--color-border);
    border-radius: 4px;
    padding: 4px;
  }

  &.first {

    .caption {
      border-radius: 0 4px 4px 0;
    }
  }
}
</style>