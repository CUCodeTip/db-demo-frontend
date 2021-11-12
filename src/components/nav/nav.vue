<script setup lang="ts">
const loggedIn = ref(false)
const buttonText = computed(() => loggedIn.value ? 'Logged in' : 'Login')
</script>

<template>
  <nav
    class="
  w-30rem min-h-screen p-10
  flex flex-col justify-between
  bg-gray-700
  rounded-tr-3rem rounded-br-3rem
  "
  >
    <div class="space-y-3rem">
      <h4>DDD</h4>
      <h4>DDD</h4>
      <h4>DDD</h4>
    </div>
    <div class="flex justify-between items-center h-2.5rem">
      <span>username: </span>
      <input
        type="text"
        class="border border-gray-900
      bg-transparent
      h-full px-3
      rounded-xl"
      >
      <button
        class="bg-gray-900
      rounded-xl
      w-6rem h-full
      "
      >
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </nav>
</template>

<style>

</style>
