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
.task-list {
  --task-bg: #f5f5f5;
  --task-completed-color: #888;
  --task-border-radius: 4px;
  --text-secondary: #666;
  --spacing-base: 8px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: calc(var(--spacing-base) * 1.5);
  background: var(--task-bg);
  margin-bottom: var(--spacing-base);
  border-radius: var(--task-border-radius);
  display: flex;
  align-items: center;
}

li.completed span {
  text-decoration: line-through;
  color: var(--task-completed-color);
}

input[type="checkbox"] {
  margin-right: calc(var(--spacing-base) * 1.5);
}

.counts {
  color: var(--text-secondary);
  margin-top: calc(var(--spacing-base) * 2);
}
</style>
