<script setup lang="ts">
import FormattedDate from '../formatted-date.vue'
import { useFindRideStore } from '~/stores/findRideStore'

const findRide = useFindRideStore()

defineProps<{
  driverName: string
  driverId: number
  maxAvailableSeats: number
  reservedPassengers: number
  startingTime: Date
  from: string
  to: string
}>()
</script>

<template>
  <div
    class="flex w-full justify-evenly items-center
  bg-gray-700 rounded-full h-22 cursor-pointer"
    :class="{
      'bg-orange-500': findRide.isRideSelected(driverId, startingTime),
      'hover:bg-orange-300': !findRide.isRideSelected(driverId, startingTime),
    }"
  >
    <div class="bruhslkdfjg2">
      <span class="font-semibold">{{ driverName }}</span>
    </div>
    <passengers-count :passengers="reservedPassengers" :max-passengers="maxAvailableSeats" />
    <formatted-date :date="startingTime" />
    <formatted-time :date="startingTime" />
    <pin-from-to :from="from" :to="to" />
  </div>
</template>
