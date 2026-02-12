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

<script lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

export default {
  name: 'TaskInput',
  setup() {
    const newTask = ref<string>('')
    const taskStore = useTaskStore()

    function addTask() {
      if (newTask.value.trim()) {
        taskStore.addTask(newTask.value.trim())
        newTask.value = ''
      }
    }

    return {
      newTask,
      addTask
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
