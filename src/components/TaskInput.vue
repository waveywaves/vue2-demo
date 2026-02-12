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
  --input-border-color: #ddd;
  --input-border-radius: 4px;
  --button-bg: #333;
  --button-bg-hover: #555;
  --button-text-color: white;
  --spacing-base: 8px;

  display: flex;
  gap: var(--spacing-base);
  margin-bottom: calc(var(--spacing-base) * 3);
}

input {
  flex: 1;
  padding: calc(var(--spacing-base) * 1.5);
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  font-size: 16px;
}

button {
  padding: calc(var(--spacing-base) * 1.5) calc(var(--spacing-base) * 3);
  background: var(--button-bg);
  color: var(--button-text-color);
  border: none;
  border-radius: var(--input-border-radius);
  cursor: pointer;
}

button:hover {
  background: var(--button-bg-hover);
}
</style>
