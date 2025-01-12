<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      <h1>Home page</h1>
      <p>{{ message }}</p>
    </div>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <div v-if="isVisible">v-if: 조건이 false면 DOM에서 제거됨</div>
    <div v-show="isVisible">v-show: 조건이 false면 display: none 처리</div>
  
    <img :src="imgSrc" :alt="imgAlt">
    <img src="/banner.jpg" alt="dd">

    <Button>확인</Button>
    <Card title="title" :user="{name: 'dd', email: 'dddd'}" @userSelected="handleUserSelected" />

    <div>
      <p>Count: {{count}}</p>
      <Button @click="increment">Increment</Button>
      <Button @click="decrement">Decrement</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "~/components/ui/BaseButton/Button.vue";
import Card from "~/components/ui/BaseCard/Card.vue";
import {UseCounter} from "~/composables/useCounter";

const message = "Hello, Vue 3!";

const items = ref<any[]>([
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
]);

const isVisible = ref(false);

const imgSrc = ref<string | null>('/banner.jpg');
const imgAlt = ref<string | null>('banner');

const {count, increment, decrement} = UseCounter()
</script>