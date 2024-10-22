<script setup lang="ts">
import PostBody from '@/components/post/PostBody.vue';
import { computed, onMounted } from 'vue';
import { usePostsStore } from '@/stores/postStore';

interface post {
  id: number,
  title: string,
  body: string,
  tags: Array<string>,
  reactions: object,
  views: number,
  userid: number,
}

const postStore = usePostsStore()
const posts = computed(() => postStore.posts);

onMounted(async () => {
  const postsPromises = [
    postStore.fetchPost(1),
    postStore.fetchPost(2),
    postStore.fetchPost(3),
    postStore.fetchPost(4),
    postStore.fetchPost(5),
  ];

  const postsData = await Promise.all(postsPromises);
});
</script>

<template>
  <main>
    <PostBody 
      v-for="post in posts"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      :tags="post.tags"
      :reactions="post.reactions"
      :views="post.views"
      :userid="post.userid"
    />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>