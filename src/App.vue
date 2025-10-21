<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Check if user has an active programme
  const activeProgramme = localStorage.getItem('activeProgramme')
  if (!activeProgramme) {
    // First time user - could redirect to onboarding
    console.log('Welcome to 100 Days Of!')
  }
})
</script>

<style>
/* Global styles - dark theme with red accents */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Smooth transitions */
a {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

button {
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #DC2626;
  outline-offset: 2px;
}
</style>