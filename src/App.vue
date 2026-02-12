<template>
  <div id="app">
    <div class="container">
      <h1>Vue 3 Task List</h1>
      <TaskInput />
      <TaskList />
    </div>
  </div>
</template>

<script lang="ts">
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  setup() {
    return {
      TaskInput,
      TaskList
    }
  }
}
</script>

<style scoped>
#app {
  --color-text: #333;
  --color-primary: #333;
  --font-family: system-ui, -apple-system, sans-serif;
  --spacing-base: 8px;

  font-family: var(--font-family);
  color: var(--color-text);
}

.container {
  max-width: 500px;
  margin: calc(var(--spacing-base) * 5) auto;
  padding: 0 calc(var(--spacing-base) * 2.5);
}

h1 {
  margin-bottom: calc(var(--spacing-base) * 3);
  font-weight: 600;
}
</style>
