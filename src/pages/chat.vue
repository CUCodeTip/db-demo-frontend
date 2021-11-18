<script setup lang="ts">
import dumbChats from '~/dumbChats'
const getRickRolledLmao = () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}
</script>

<template>
  <ol class="overflow-y-scroll pr-3 space-y-5 max-h-80vh">
    <li
      v-for="(chat, idx) in dumbChats"
      :key="idx"
      class="bg-gray-700 rounded-xl p-4
      cursor-pointer hover:bg-orange-400"
      @click="getRickRolledLmao"
    >
      <chat-cover :chat="chat" />
    </li>
  </ol>
</template>
