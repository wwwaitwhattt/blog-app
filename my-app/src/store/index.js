import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) || []
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    getAllPosts: state => state.posts
  },
  mutations: {
    deletePost: (state, id) => {
      state.posts = state.posts.filter(post => post.id !== id)
      localStorage.setItem('posts', JSON.stringify(state.posts))
    },
    addPost: (state, post) => {
      state.posts.push(post)
      localStorage.setItem('posts', JSON.stringify(state.posts))
    },
    editPost: (state, updatedPost) => {
      const index = state.posts.findIndex(post => post.id === updatedPost.id)
      if (index !== -1) {
        Vue.set(state.posts, index, updatedPost);
        localStorage.setItem('posts', JSON.stringify(state.posts))
      }
    }
  },
  actions: {
    deletePost({ commit }, id) {
      commit('deletePost', id)
    },
    addPost({ commit }, post) {
      commit('addPost', post)
    },
    editPost({ commit }, updatedPost) {
      commit('editPost', updatedPost)
    }
  },
  modules: {
  }
})
