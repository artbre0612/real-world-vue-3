<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <h1>Oops! Page Not Found</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <div class="img">
    <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fHww" alt="">
  </div>
  <RouterLink :to="{name:'event-list'}">Back to home page</RouterLink>
</template>
<style scoped>
  .img{
    width: 450px;
    margin: auto;
    margin-bottom: 16px;
  }
  
  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
</style>