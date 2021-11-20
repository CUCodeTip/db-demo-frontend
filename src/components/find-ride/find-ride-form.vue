<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'
const findRide = useFindRideStore()

const find = () => {
  findRide.matchedRides = null
  // eslint-disable-next-line array-callback-return
  findRide.find(() => {
    // eslint-disable-next-line no-alert
    alert('There are no matched rides. Please try again later\n🤣')
  })
}

const areThereMatchedRides = computed(() => findRide.matchedRides !== null)
</script>

<template>
  <section class="space-y-4">
    <div
      class="flex gap-15"
      :class="{ 'opacity-50': areThereMatchedRides }"
    >
      <div class="ipt-container">
        <span class="text-xl">Start Location</span>
        <input
          v-model="findRide.startLocation"
          :disabled="areThereMatchedRides"
          class="ipt"
          placeholder="Location"
        >
      </div>
      <div class="ipt-container">
        <span class="text-xl">Destination Location</span>
        <input
          v-model="findRide.destinationLocation"
          :disabled="areThereMatchedRides"
          class="ipt"
          placeholder="Location"
        >
      </div>
      <div class="ipt-container">
        <span class="text-xl">Available Seats</span>
        <input
          v-model="findRide.availableSeats"
          :disabled="areThereMatchedRides"
          class="ipt"
          type="number"
          min="1"
        >
      </div>
    </div>
    <div class="flex gap-15 items-end">
      <div
        class="ipt-container"
        :class="{ 'opacity-50': areThereMatchedRides }"
      >
        <span class="text-xl">Start Date</span>
        <input
          v-model="findRide.startDate"
          :disabled="areThereMatchedRides"
          class="ipt"
          type="date"
        >
      </div>
      <div
        class="ipt-container"
        :class="{ 'opacity-50': areThereMatchedRides }"
      >
        <span class="text-xl">End Date</span>
        <input
          v-model="findRide.endDate"
          :disabled="areThereMatchedRides"
          class="ipt"
          type="date"
        >
      </div>
      <div class="flex gap-5">
        <button
          class="button h-full bg-red-600"
          :disabled="findRide.areAllFieldsDefaults"
          @click="findRide.reset"
        >
          clear
        </button>
        <button
          class="button h-full"
          :disabled="!findRide.startLocation
            || !findRide.destinationLocation
            || areThereMatchedRides"
          @click="find"
        >
          search
        </button>
      </div>
    </div>
  </section>
</template>
