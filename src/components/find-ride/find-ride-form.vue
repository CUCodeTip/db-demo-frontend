<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'
const findRide = useFindRideStore()
</script>

<template>
  <section class="space-y-4">
    <div class="flex gap-15">
      <div class="ipt-container">
        <span class="text-xl">Start Location</span>
        <input
          v-model="findRide.startLocation"
          class="ipt"
          placeholder="Location"
        >
      </div>
      <div class="ipt-container">
        <span class="text-xl">Destination Location</span>
        <input
          v-model="findRide.destinationLocation"
          class="ipt"
          placeholder="Location"
        >
      </div>
      <div class="ipt-container">
        <span class="text-xl">Available Seats</span>
        <input
          v-model="findRide.availableSeats"
          class="ipt"
          type="number"
          min="1"
        >
      </div>
    </div>
    <div class="flex gap-15 items-end">
      <div class="ipt-container">
        <span class="text-xl">Start Date</span>
        <input
          v-model="findRide.startDate"
          class="ipt"
          type="date"
        >
      </div>
      <div class="ipt-container">
        <span class="text-xl">End Date</span>
        <input
          v-model="findRide.endDate"
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
          :disabled="!findRide.startLocation || !findRide.destinationLocation"
        >
          search
        </button>
      </div>
    </div>
  </section>
</template>
