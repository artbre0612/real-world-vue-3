<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';

const GStore = inject('GStore')
</script>

<template>
  <div id="layout">
    
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list'}">Events</RouterLink> |
          <RouterLink :to="{ name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
    <div class="flash-message" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
  </div>
</template>

<style>
  #layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  nav,.nav {
    padding: 30px;
  }
  nav a,.nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  nav a.router-link-exact-active,.nav a.router-link-exact-active {
    color: #42b983;
  }

  @keyframes yellowfade {
    from {
      background-color: yellow;
    }
    to {
      background-color: transparent;
    }
  }
  .flash-message {
    animation-name: yellowfade;
    animation-duration: 4s;
  }
  

</style>
