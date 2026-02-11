<template>
  <div class="task-input">
    <input
      v-model="newTask"
      type="text"
      placeholder="Add a task..."
      @keyup.enter="addTask"
    />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$store.commit('ADD_TASK', this.newTask.trim())
        this.newTask = ''
      }
    }
  }
}
</script>

<style scoped>
.task-input {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 12px 24px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #555;
}
</style>
