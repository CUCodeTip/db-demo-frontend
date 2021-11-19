<script setup lang="ts">
import dumbChats from '~/dumbChats'

// TODO query the chats of this user
import fetchy from '~/fetchy'
// import { useUserStore } from '~/stores/user'
import { ChatCoverCard } from '~/types'

// const uStore = useUserStore()

// 'api/chat?userId=${uStore.loggedInUser}'
const { data: chatCovers } = fetchy('chat').json<ChatCoverCard[]>()


const getRickRolledLmao = () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}

onMounted(() => {

})
</script>

<template>
  <ol
    v-if="chatCovers"
    class="overflow-y-scroll pr-3 space-y-5 max-h-80vh"
  >
    <li
      v-for="(chat, idx) in dumbChats /* chatCovers */"
      :key="idx"
      class="bg-gray-700 rounded-xl p-4
        cursor-pointer hover:bg-orange-400"
      @click="getRickRolledLmao"
    >
      <chat-cover :chat="chat" />
    </li>
  </ol>
</template>
