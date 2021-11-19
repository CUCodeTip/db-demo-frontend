<script setup lang="ts">
import { RideStatusBruh } from '~/types'

const props = defineProps<{
  status: RideStatusBruh
}>()

const rideStatusToClass: {
  [key in RideStatusBruh]: string
} = {
  booked: 'text-green-400',
  available: 'text-green-300',
  cancelled: 'text-[#FF5353]',
  ended: 'text-gray-300',
  full: 'text-orange-400',
  ongoing: 'text-blue-400',
}
const color = rideStatusToClass[props.status]
</script>

<template>
  <span :class="[color, 'text-xl']">
    {{ props.status }}
  </span>
</template>
