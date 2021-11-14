<script setup lang="ts">
import { ChatCover } from '~/dumbChats'
import { formatTime } from '~/utils'
defineProps<{
  chat: ChatCover
}>()
</script>

<template>
  <div class="flex px-3 space-x-10 w-full justify-between">
    <img
      :src="chat.profile"
      class="h-25 w-25 rounded-full object-center object-cover"
    >
    <div class="space-y-3 flex-grow">
      <div class="flex items-center justify-between">
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
        <p class="w-4/5">
          {{ chat.latestMessage.text }}
        </p>
        <span>
          {{ formatTime(chat.latestMessage.timestamp) }}
        </span>
      </div>
    </div>
  </div>
</template>
