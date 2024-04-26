<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
  event: {
    required: true
  }
})
const GStore = inject('GStore')

const register = () => {
  GStore.flashMessage = '成功報名!' + ' ' + props.event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  },3000)
  router.push({
    name: 'event-details',
  })
}

 
</script>

<template>
  
  <p>在這裡報名</p>
  <button @click="register">Register Me!</button>
 
</template>