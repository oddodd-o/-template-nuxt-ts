<template>
  <div>
    <button @click="handleClick" class="custom-button">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.custom-button {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>