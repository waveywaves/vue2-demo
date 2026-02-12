<template>
  <div class="task-list">
    <ul>
      <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleTask(task.id)"
        />
        <span>{{ task.text }}</span>
      </li>
    </ul>
    <p class="counts">{{ completedCount }} completed, {{ pendingCount }} pending</p>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useTaskStore, type Task } from '@/stores/taskStore'

export default {
  name: 'TaskList',
  setup() {
    const taskStore = useTaskStore()

    const tasks = computed<Task[]>(() => taskStore.tasks)
    const completedCount = computed(() => taskStore.completedCount)
    const pendingCount = computed(() => taskStore.pendingCount)

    const toggleTask = (id: number): void => {
      taskStore.toggleTask(id)
    }

    return {
      tasks,
      completedCount,
      pendingCount,
      toggleTask
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 12px;
  background: #f5f5f5;
  margin-bottom: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
}

input[type="checkbox"] {
  margin-right: 12px;
}

.counts {
  color: #666;
  margin-top: 16px;
}
</style>
