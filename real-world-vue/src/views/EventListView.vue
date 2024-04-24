<script setup>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';
import { ref,onMounted } from 'vue';

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
    .then(res => {
      events.value = res.data
    })
    .catch(err => console.log(err))
})

</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center
  }
</style>