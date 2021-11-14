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
    <div class="flex-grow space-y-3">
      <div>
        <span class="hello-there">
          <eva:pin-fill />
          <span>From: {{ from }}</span>
        </span>
        <span class="hello-there">
          <eva:pin-fill />
          <span>To: {{ to }}</span>
        </span>
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
    <div>
      <ride-status :status="status" />
    </div>
  </div>
</template>

<style scoped>
.hello-there {
  @apply block flex space-x-2 items-center text-xl;
}
</style>
