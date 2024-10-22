import { defineStore } from 'pinia';
import axios from 'axios';


interface post {
  id: number,
  title: string,
  body: string,
  tags: Array<string>,
  reactions: object,
  views: number,
  userid: number,
}

interface postData {
  id: number,
  liked: boolean,
  disliked: boolean,
  likes: number,
  dislikes: number,
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Array<post>,
    postsData: [] as Array<postData>,
  }),
  actions: {
    async fetchPost(id: number) {
      const exists = this.posts.some(post => post.id === id);
      if (exists) {return;}
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        this.posts.push(response.data);
        this.postsData.push({
          id: response.data.id,
          liked: false,
          disliked: false,
          likes: response.data.reactions.likes,
          dislikes: response.data.reactions.dislikes,
        });
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
  },
});

