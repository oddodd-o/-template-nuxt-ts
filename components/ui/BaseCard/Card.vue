<template>
  <div class="user-card">
    <h2>{{title}}</h2>
    <p>{{user.name}}</p>
    <p>{{user.email}}</p>
    <button @click="handleClick">Select</button>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

interface User {
  name: string
  email: string
}

// TypeScript 방식으로 props 정의
const props = defineProps<{
  title: string
  user: User
}>()

// TypeScript 방식으로 emits 정의
const emit = defineEmits<{
  (e: 'userSelected', user: User): void
}>()

const handleClick = () => {
  emit('userSelected', props.user)
}
</script>

<style scoped lang="scss">
.user-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>