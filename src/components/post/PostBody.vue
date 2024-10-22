<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import PostRating from './PostRating.vue';
import PostTags from './PostTags.vue';

const props = defineProps<{
  id: number;
  title: string;
  body: string;
  tags: Array<string>;
  reactions: object;
  views: number;
  userid: number;
}>()
</script>

<template>
  <div class="post">
    <div class="main-info">
      <h1 class="text-h1">{{ title }}</h1>
      <p class="text-body">{{ body }}</p>
    </div>

    <div class="actions">
      <PostRating :id="id" />
      <RouterLink :to="`/post/${id}`" class="comment-show-button">Open comments</RouterLink>
      <span class="todo-date">Today</span>
      <PostTags :tags="tags" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.post {
  display: flex;
  flex-direction: column;
  gap: 24px;

  .main-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .actions {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;

    .comment-show-button {
      height: 22px;
      text-decoration: none;
      user-select: none;
      cursor: pointer;
      color: var(--color-accent-primary);
      box-shadow: 0px 0.7px 0px 0px var(--color-accent-border);
    }

    .todo-date {
      color: var(--color-border-another);
    }
  }
}


</style>