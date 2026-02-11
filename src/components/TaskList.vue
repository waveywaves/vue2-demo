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

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TaskList',
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['completedCount', 'pendingCount'])
  },
  methods: {
    toggleTask(id) {
      this.$store.commit('TOGGLE_TASK', id)
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
