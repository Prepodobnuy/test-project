<script lang="ts">
import LikeIcon from '@/components/icons/LikeIcon.vue';

export default {
  components: {
    LikeIcon
  },
  props: {
    value: {
      type: Number || undefined,
      required: true,
    },
    active: {
      type: Boolean || undefined,
      required: true,
    }
  }
}
</script>

<template>
  <button 
    :class="active ? 'active' : ''"
  >
    <span class="text-caption">
      <LikeIcon class="icon" :active="active" />
      Like
    </span>
    <div class="count text-number-tab"> {{ value }} </div>
  </button>
</template>

<style scoped lang="scss">
button {
  border: unset;
  outline: unset;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  background-color: var(--color-button-background);
  width: 97px;
  height: 27px;
  border-radius: 20px 0 0 20px;
  transition: background-color 0.1s;

  span {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 11px;
    justify-content: center;
    align-items: center;
    gap: 3px;
    margin-left: 8px;
  }

  .count {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    right: 5px;
    opacity: 0.4;
  }

  &.active {
    background-color: var(--color-like-button-active);
    color: var(--color-chrome);

    * {
      color: var(--color-chrome);
    }

    span {
      .icon{
        fill: var(--color-chrome);
        stroke: none;
      }
    }

    .count {
      opacity: 1;
    }
  }
}
</style>