<script setup lang="ts">
import { RideStatusBruh } from '~/types'

defineProps<{
  driver: string
  maxPassengers: number
  passengers: number
  dateTime: Date
  from: string
  to: string
  status: RideStatusBruh
}>()
</script>

<template>
  <div class="flex">
    <div class="flex-grow space-y-4">
      <div>
        <h2 class="mb-2 font-medium">
          {{ driver }}'s Ride
        </h2>
        <div class="space-y-1 font-light">
          <span class="hello-there">
            <eva:pin-fill />
            <span>From: {{ from }}</span>
          </span>
          <span class="hello-there">
            <eva:pin-fill />
            <span>To: {{ to }}</span>
          </span>
        </div>
      </div>
      <div class="flex space-x-3">
        <formatted-date :date="dateTime" />
        <formatted-time :date="dateTime" />
        <passengers-count
          :passengers="passengers"
          :max-passengers="maxPassengers"
        />
      </div>
    </div>
    <div class="flex flex-col justify-between items-center">
      <ride-status :status="status" />
      <button class="button bg-[#F34949] rounded-20px">
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped>
.hello-there {
  @apply block flex space-x-2 items-center text-xl;
}
</style>
