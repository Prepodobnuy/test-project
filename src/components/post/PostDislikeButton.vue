<script lang="ts">
import DislikeIcon from '../icons/DislikeIcon.vue';

export default {
  components: {
    DislikeIcon
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
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
      <DislikeIcon class="icon" :active="active" />
      Trash
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
  border-radius: 0 20px 20px 0;
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
    background-color: var(--color-dislike-button-active);
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
      opacity: 0.7;
    }
  }
}
</style>