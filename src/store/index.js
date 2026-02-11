import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Review pull request', completed: false },
      { id: 3, text: 'Call mom', completed: true }
    ],
    nextId: 4
  },
  mutations: {
    ADD_TASK(state, text) {
      state.tasks.push({ id: state.nextId++, text, completed: false })
    },
    TOGGLE_TASK(state, id) {
      const task = state.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
    }
  },
  getters: {
    completedCount: state => state.tasks.filter(t => t.completed).length,
    pendingCount: state => state.tasks.filter(t => !t.completed).length
  }
})
