import Vue from 'vue'
import Vuex from 'vuex'
import { posts } from './posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) || posts
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
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
    editPost: (state, id) => {
      const index = state.posts.findIndex(post => post.id === id)
      if (index !== -1) {
        Vue.set(state.posts, index, id);
        localStorage.setItem('posts', JSON.stringify(state.posts))
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
