<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { ChatCard } from '~/types'

const props = defineProps<{
  chat: ChatCard
}>()

const uStore = useUserStore()

// This is the chat of your own ride?
const isChatYours = uStore.loggedInUser?.user_id === props.chat.driver_id
const recentMessageTime = props.chat.recentMessage?.createAt
  ? `${String(new Date(props.chat.recentMessage.createAt).getHours()).padStart(2, '0')}:${
    String(new Date(props.chat.recentMessage.createAt).getMinutes()).padStart(2, '0')}`
  : ''
</script>

<template>
  <div class="flex px-3 space-x-10 w-full justify-between">
    <img
      src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
      class="h-25 w-25 rounded-full object-center object-cover"
    >
    <div class="space-y-3 flex-grow">
      <div class="flex items-center justify-between">
        <h4
          class="font-semibold text-2xl flex-grow"
          :class="{ 'text-orange-500': isChatYours }"
        >
          {{ isChatYours ? 'Your' : chat.driver_name + '\'s' }} Ride
        </h4>
        <div class="flex items-center justify-center gap-3">
          <formatted-date :date="chat.starting_time" />
          <formatted-time :date="chat.starting_time" />
          <passengers-count
            :max-passengers="chat.max_available_seats"
            :passengers="chat.reserved_passengers"
          />
        </div>
      </div>
      <div class="flex opacity-60 justify-between">
        <p class="w-4/5">
          {{ chat.recentMessage?.message }}
        </p>
        <span v-if="chat.recentMessage?.createAt">
          {{ recentMessageTime }}
        </span>
      </div>
    </div>
  </div>
</template>
