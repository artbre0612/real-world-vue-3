<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import EventService from '@/services/EventService.js'

const router = useRouter()
const event = ref(null)
const props = defineProps({
  id: {
    required: true
  }
})

onMounted(() => {
  //fetch event (by id) and set local data
  EventService.getEvent(props.id)
  .then(res => {
    event.value = res.data
  })
  .catch(err => {
    if(err.response && err.response.status === 404){
      router.push({
      name: 'no-found',
      params: {resource: event}
      })
    } else {
      router.push({
        name: 'network-error'
      })
    }
  })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div class="nav">
      <RouterLink
        :to="{name: 'event-details'}"
      >Details</RouterLink> |
      <RouterLink
        :to="{name: 'event-register'}"
      >Register</RouterLink> |
      <RouterLink
        :to="{name: 'event-edit'}"
      >Edit</RouterLink>
    </div>
    <RouterView :event="event"/>
  </div>
</template>