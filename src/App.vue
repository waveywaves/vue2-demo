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
  font-family: system-ui, -apple-system, sans-serif;
  color: #333;
}

.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 0 20px;
}

h1 {
  margin-bottom: 24px;
  font-weight: 600;
}
</style>
