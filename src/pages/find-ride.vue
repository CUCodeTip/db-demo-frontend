<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'
const findRide = useFindRideStore()
</script>

<template>
  <main class="space-y-10">
    <find-ride-form />
    <find-ride-result v-show="findRide.matchedRides" />
  </main>
</template>
