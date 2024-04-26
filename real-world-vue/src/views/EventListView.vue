<script setup>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router';
import { ref,onMounted,watchEffect, computed } from 'vue';

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const router = useRouter()
const events = ref(null)
const totalEvents = ref(0)

const hasNextPage = computed(() => {
  let totalPages = Math.ceil(totalEvents.value / 2)
  return props.page < totalPages
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(2,props.page)
    .then(res => {
      events.value = res.data
      // console.log(res.headers)
      totalEvents.value = res.headers['x-total-count']
    })
    .catch(err => {
      router.push({
        name: 'network-error'
      })
    })
  })
})

</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <div class="pagination">
      <RouterLink 
        :to="{ name: 'event-list', query: {page: page - 1}}"
        rel='prev'
        v-if="page !== 1"
      >Prev</RouterLink>
      <RouterLink 
        :to="{ name: 'event-list', query: {page: page + 1}}"
        rel='next'
        v-if="hasNextPage"
      >Next</RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center
  }
  .pagination{
    display: flex;
    width: 290px;
  }
  .pagination a{
    flex:1;
    text-decoration: none;
    color: #2c3e50;
  }
</style>