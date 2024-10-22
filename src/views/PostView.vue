<script setup lang="ts">
import PostBody from '@/components/post/PostBody.vue';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePostsStore } from '@/stores/postStore';
import CommentSection from '@/components/comment/CommentSection.vue';

const route = useRoute();
const postId = Number(route.params.id);
const postStore = usePostsStore();

onMounted(() => {
  postStore.fetchPost(postId);
});

const post = computed(() => {
  return postStore.posts.find(p => p.id === postId);
});
</script>

<template>
  <main v-if="post">
    <PostBody 
      :id="post.id"
      :title="post.title"
      :body="post.body"
      :tags="post.tags"
      :reactions="post.reactions"
      :views="post.views"
      :userid="post.userid"
    />
    <CommentSection
      :postId="post.id"
    />
  </main>
</template>