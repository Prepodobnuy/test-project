<script setup lang="ts">
import { defineProps, computed, onMounted } from 'vue';
import PostDislikeButton from './PostDislikeButton.vue';
import PostLikeButton from './PostLikeButton.vue';
import { usePostsStore } from '@/stores/postStore';

const postStore = usePostsStore();

const props = defineProps<{
  id: number;
}>();

const postData = computed(() => postStore.postsData.find(p => p.id === props.id));

onMounted(async () => {
  if (!postData.value) {
    await postStore.fetchPost(props.id);
  }
});

const likeHandle = () => {
  if (postData.value) {
    const data = postStore.postsData.find(p => p.id === props.id)
    
    if (!data) {return}
    
    data.likes += data.liked ? -1 : 1;
    data.liked = !postData.value.liked;

    if (data.disliked) {
      data.dislikes -= 1
      data.disliked = false
    }
  }
}

const dislikeHandle = () => {
  if (postData.value) {
    const data = postStore.postsData.find(p => p.id === props.id)
    
    if (!data) {return}
    
    data.dislikes += data.disliked ? -1 : 1;
    data.disliked = !postData.value.disliked;

    if (data.liked) {
      data.likes -= 1
      data.liked = false
    }
  }
}
</script>

<template>
  <div class="row">
    <PostLikeButton 
      v-if="postData"
      @click="likeHandle"
      :value="postData.likes" 
      :active="postData.liked"
    />
    <PostDislikeButton
      v-if="postData" 
      @click="dislikeHandle"
      :value="postData.dislikes" 
      :active="postData.disliked"
    />
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1px;
}
</style>