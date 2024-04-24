<script setup>

defineProps({
  event: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <RouterLink class="event-link" :to="{name:'event-details', params: {id: event.id}}">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
  .event-card {
    min-height: 130px;
    padding: 20px;
    width: 280px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  h2{
    margin: 0 0 0.5rem 0
  }
  .event-link {
    text-decoration: none;
    color: #2c3e50;
  }

</style>
