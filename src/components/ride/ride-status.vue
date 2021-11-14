<script setup lang="ts">
import { RideStatus } from '~/types'

const props = defineProps<{
  status: RideStatus
}>()

const rideStatusToClass: {
  [key in RideStatus]: string
} = {
  Booked: 'text-green-400',
  Available: 'text-green-300',
  Cancelled: 'text-#FF5353',
  Ended: 'text-dark-900',
  Full: 'text-orange-400',
  Ongoing: 'text-blue-400',
}
const color = rideStatusToClass[props.status]
</script>

<template>
  <span :class="[color, 'text-xl']">
    {{ props.status }}
  </span>
</template>
