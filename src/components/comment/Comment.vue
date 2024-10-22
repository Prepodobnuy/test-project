<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useCommentStore } from '@/stores/commentStore';

const props = defineProps<{
  postId: number,
  id: number,
  username: string,
  body: string,
  deleted: boolean,
}>()

const emit = defineEmits<{
  (event: 'comment-delete'): void;
}>();

const commentStore = useCommentStore();

const handleDeleteClick = () => {
  commentStore.deleteComment(props.postId, props.id)
}

</script>

<template>
  <div 
    class="comment" 
    v-if="!props.deleted"
  >
    <div class="pfp"></div>

    <div class="column">
      
      <div class="info">
        <p class="nickname text-nickname">{{ username }}</p>
        <p class="message text-body">{{ body }}</p>
      </div>

      <div class="actions">
        <span class="todo-date">Today</span>
        <div class="delete"
          @click="handleDeleteClick"
        >
          Удалить
        </div>
      </div>
    
    </div>

  </div>
</template>

<style scoped lang="scss">
.comment {
  display: flex;
  flex-direction: row;
  gap: 8px;

  .pfp {
    width: 46px;
    height: 46px;
    box-shadow: inset 0 0 0 3px var(--color-text);
    border-radius: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 12px;
  
      .nickname {
        line-height: 14px;
      }

      .message {
        line-height: 14px;
      }
    }
  
    .actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;

      .todo-date {
        color: var(--color-border-another);
        font-size: 13px;
        line-height: 12px;
        height: 12px;
      }
      .delete {
        height: 14px;
        font-size: 13px;
        line-height: 12px;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
        color: var(--color-red);
        box-shadow: 0px 0.7px 0px 0px var(--color-red-border);
      }
    }
  }
}
</style>