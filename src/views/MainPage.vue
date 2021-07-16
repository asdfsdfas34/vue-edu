<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPost } from "@/api/index.js";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  data() {
    return {
      postItems: [],
      isloading: false,
    };
  },

  components: {
    PostListItem,
    LoadingSpinner,
  },

  methods: {
    async fetchNote() {
      this.isloading = true;
      const { data } = await fetchPost();
      this.postItems = data.posts;

      this.isloading = false;
    },
  },

  created() {},
};
</script>

<style>
</style>