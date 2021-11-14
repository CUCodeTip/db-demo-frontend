<script setup lang="ts">
import { RideStatusBruh } from '~/types'

const props = defineProps<{
  status: RideStatusBruh
}>()

const rideStatusToClass: {
  [key in RideStatusBruh]: string
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
