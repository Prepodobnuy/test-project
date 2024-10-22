<script lang="ts">
import PostTag from './PostTag.vue';

export default {
  props: {
    tags: {
      type: Array<string>,
      required: true,
    }
  },
  components: {
    PostTag,
  }
}
</script>

<template>
  <div class="tags-row">
    <PostTag 
      v-for="(tag, index) in tags"
      :first="index===0"
      :caption="tag"
    />
  </div>
</template>

<style scoped lang="scss">
.tags-row {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
  height: 27px;
}
</style>