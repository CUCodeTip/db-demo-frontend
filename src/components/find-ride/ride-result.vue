<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'
import { formatDate, formatTime } from '~/utils'

const findRide = useFindRideStore()

const props = defineProps<{
  driver: string
  maxPassengers: number
  passengers: number
  dateTime: Date
  from: string
  to: string
}>()

const date = formatDate(props.dateTime)
const time = formatTime(props.dateTime)
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
    <div class="bruhslkdfjg2">
      <el:person class="icon-wg4938vdc" /><span>{{ passengers }}/{{ maxPassengers }}</span>
    </div>
    <div class="bruhslkdfjg2">
      <bx:bx-calendar class="icon-wg4938vdc" /><span>{{ date }}</span>
    </div>
    <div class="bruhslkdfjg2">
      <akar-icons:clock class="icon-wg4938vdc" /><span>{{ time }}</span>
    </div>
    <pin-from-to :from="from" :to="to" />
  </div>
</template>

<style>
.bruhslkdfjg2 {
  @apply flex items-center justify-center gap-3;
}
.icon-wg4938vdc {
  @apply w-7 h-7;
}
</style>
