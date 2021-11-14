<script setup lang="ts">
import FormattedDate from '../formatted-date.vue'
import { useFindRideStore } from '~/stores/findRideStore'

const findRide = useFindRideStore()

defineProps<{
  driver: string
  maxPassengers: number
  passengers: number
  dateTime: Date
  from: string
  to: string
}>()
</script>

<template>
  <div
    class="flex w-full justify-evenly items-center
  bg-gray-700 rounded-full h-22 cursor-pointer"
    :class="{
      'bg-orange-500': findRide.isRideSelected(driver, dateTime),
      'hover:bg-orange-300': !findRide.isRideSelected(driver, dateTime),
    }"
  >
    <div class="bruhslkdfjg2">
      <span class="font-semibold">{{ driver }}</span>
    </div>
    <passengers-count :passengers="passengers" :max-passengers="maxPassengers" />
    <formatted-date :date="dateTime" />
    <formatted-time :date="dateTime" />
    <pin-from-to :from="from" :to="to" />
  </div>
</template>
