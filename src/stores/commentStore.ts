import { defineStore } from 'pinia';
import axios from 'axios';

interface user {
  id: number;
  username: string;
  fullname: string;
}

interface comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: user;
  deleted: boolean;
}

interface comments {
  postId: number;
  comments: Array<comment>;
}

export const useCommentStore = defineStore('comments', {
  state: () => ({
    comments: [] as Array<comments>,
  }),
  actions: {
    async fetchComments(postId: number) {
      const exists = this.comments.some(post => post.postId === postId);
      if (exists) { return; }

      try {
        const response = await axios.get(`https://dummyjson.com/posts/${postId}/comments`);
        
        const commentsList: Array<comment> = response.data.comments.map((data: any) => {
          const user = {
            id: data.user.id,
            username: data.user.username,
            fullname: data.user.fullname,
          } as user;
          return {
            id: data.id,
            body: data.body,
            postId: data.postId,
            likes: data.likes,
            user: user,
            deleted: false,
          } as comment;
        });

        this.comments.push({
          postId: postId,
          comments: commentsList,
        });

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
    deleteComment(postId: number, commentId: number): boolean {
      const post = this.comments.find(post => post.postId === postId);
      if (!post) {return false;}
      
      const comment = post.comments.find(c => c.id === commentId);
      if (!comment) { return false; }
      
      comment.deleted = true; 

      return true;
    }
  }
});