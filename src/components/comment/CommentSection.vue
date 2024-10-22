<script setup lang="ts">
import { useCommentStore } from '@/stores/commentStore';
import { computed, onMounted, defineProps, ref, watch } from 'vue';
import CommentCount from './CommentCount.vue';
import Comment from '@/components/comment/Comment.vue';

const props = defineProps<{
  postId: number;
}>()

const commentStore = useCommentStore();

onMounted(() => {
  commentStore.fetchComments(props.postId);
});

const comments = computed(() => {
  const postComments = commentStore.comments.find(c => c.postId === props.postId);
  return postComments ? postComments.comments : [];
});

const count = computed(() => {
  return comments.value.filter(comment => !comment.deleted).length;
});

</script>

<template>
  <div class="comments-column" v-if="comments">
    <CommentCount 
      class="count"
      :count="count" 
    />
    <Comment 
      @comment-delete=""
      v-for="comment in comments" 
      :postId = props.postId
      :id = comment.id
      :username="comment.user.username"
      :body="comment.body"
      :deleted="comment.deleted"
    />
  </div>
</template>

<style scoped lang="scss">
.comments-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 10px;

  .count {
    padding-top: 40px;
  }
}
</style>