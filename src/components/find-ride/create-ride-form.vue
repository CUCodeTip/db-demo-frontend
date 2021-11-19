<script setup lang="ts">
import { getDateAsInput } from '~/utils'

const startLocation = ref('')
const destinationLocation = ref('')
const availableSeats = ref(1)
const startDate = ref(getDateAsInput(new Date()))

const createRide = () => {
  //
}
</script>

<template>
  <form v-if="true" class="flex flex-wrap gap-y-4 gap-x-10">
    <div class="ipt-container w-100">
      <span class="text-xl">Start Location</span>
      <input
        v-model="startLocation"
        required
        type="text"
        class="ipt"
        placeholder="Start Location"
      >
    </div>
    <div class="ipt-container w-100">
      <span class="text-xl">Destination Location</span>
      <input
        v-model="destinationLocation"
        required
        type="text"
        class="ipt"
        placeholder="Destination Location"
      >
    </div>
    <div class="ipt-container w-100">
      <span class="text-xl">Available Seats</span>
      <input
        v-model="availableSeats"
        required
        type="number"
        class="ipt"
        min="0"
      >
    </div>
    <div class="ipt-container w-100">
      <span class="text-xl">Start Date</span>
      <input
        v-model="startDate"
        required
        class="ipt"
        type="date"
      >
    </div>
    <button
      class="button mt-auto"
      type="submit"
      :disabled="!startLocation || !destinationLocation || !availableSeats"
      @click.prevent="createRide"
    >
      create
    </button>
  </form>
</template>
