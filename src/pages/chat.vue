<script setup lang="ts">
import fetchy from '~/fetchy'
import { useUserStore } from '~/stores/user'
import { ChatCard } from '~/types'

const uStore = useUserStore()

const {
  data: chatCovers,
  execute: getChatCovers,
} = fetchy('chat', {
  immediate: false,
  afterFetch(ctx) {
    ctx.data = ctx.data.map((chatCover: any) => {
      chatCover.starting_time = new Date(chatCover.starting_time)
      return chatCover
    })
    ctx.data.sort((a: ChatCard, b: ChatCard) => {
      return b.starting_time.getTime() - a.starting_time.getTime()
    })
    return ctx
  },
}).post({
  userId: uStore.loggedInUser?.user_id,
}).json<ChatCard[]>()

const getRickRolledLmao = () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}

onMounted(() => {
  getChatCovers()
})
</script>

<template>
  <ol
    v-if="chatCovers"
    class="overflow-y-scroll pr-3 space-y-5 max-h-80vh"
  >
    <li
      v-for="chat in chatCovers /* chatCovers */"
      :key="chat.chat_id"
      class="bg-gray-700 rounded-xl p-4
        cursor-pointer hover:bg-orange-400"
      @click="getRickRolledLmao"
    >
      <chat-cover :chat="chat" />
    </li>
  </ol>
</template>
