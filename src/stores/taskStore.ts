import { defineStore } from 'pinia'

export interface Task {
  id: number
  text: string
  completed: boolean
}

export interface TaskState {
  tasks: Task[]
  nextId: number
}

export const useTaskStore = defineStore('tasks', {
  state: (): TaskState => ({
    tasks: [
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Review pull request', completed: false },
      { id: 3, text: 'Call mom', completed: true }
    ],
    nextId: 4
  }),

  actions: {
    addTask(text: string): void {
      this.tasks.push({
        id: this.nextId++,
        text,
        completed: false
      })
    },

    toggleTask(id: number): void {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
      }
    }
  },

  getters: {
    completedCount(): number {
      return this.tasks.filter(t => t.completed).length
    },

    pendingCount(): number {
      return this.tasks.filter(t => !t.completed).length
    }
  }
})
