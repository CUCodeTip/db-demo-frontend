<script setup lang="ts">
import { ChatCover } from '~/dumbChats'
import { formatTime } from '~/utils'
defineProps<{
  chat: ChatCover
}>()
</script>

<template>
  <div class="flex px-3 space-x-10">
    <div class="inline-block rounded-full w-25 h-25 overflow-hidden">
      <img :src="chat.profile" class="object-cover object-center">
    </div>
    <div class="flex-grow space-y-3">
      <div class="flex items-center">
        <h4 class="font-semibold text-2xl flex-grow">
          {{ chat.driver }}'s Ride
        </h4>
        <div class="flex items-center justify-center gap-3">
          <formatted-date :date="chat.startDate" />
          <formatted-time :date="chat.startDate" />
          <passengers-count
            :max-passengers="chat.maxPassengers"
            :passengers="chat.passengers"
          />
        </div>
      </div>
      <div class="flex opacity-60 justify-between">
        <p class="w-250">
          {{ chat.latestMessage.text }}
        </p>
        <span>
          {{ formatTime(chat.latestMessage.timestamp) }}
        </span>
      </div>
    </div>
  </div>
</template>
