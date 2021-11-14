<script setup lang="ts">
import dumbInfo from '../../dumbRides'
import { useFindRideStore } from '~/stores/findRideStore'
import { formatDateTime } from '~/utils'
const findRide = useFindRideStore()

const book = () => {
  alert(
    `The ride from ${findRide.selectedRide!.driver} departing at ${formatDateTime(findRide.selectedRide!.startTime)} has been booked.`,
  )
  findRide.reset()
}
</script>

<template>
  <section>
    <div class="flex items-center space-x-4">
      <h2 class="mb-3">
        Results <span class="font-normal">({{ dumbInfo.length }})</span>
      </h2>
      <span v-if="findRide.selectedRide">
        Booking a ride from
        <em class="text-orange-400">
          {{ findRide.selectedRide.driver }}
        </em> starting at
        <em class="text-orange-400">
          {{ formatDateTime(findRide.selectedRide.startTime) }}
        </em></span>
    </div>
    <ol class="space-y-2 h-120 overflow-y-scroll pr-3">
      <li
        v-for="ride in dumbInfo"
        :key="`${ride.driver}${ride.dateTime.getMilliseconds()}`"
      >
        <ride-result
          :driver="ride.driver"
          :max-passengers="ride.maxPassengers"
          :passengers="ride.passengers"
          :date-time="ride.dateTime"
          :from="ride.from"
          :to="ride.to"
          @click="findRide.toggleRide(ride.driver, ride.dateTime)"
        />
      </li>
    </ol>
    <button
      v-show="dumbInfo"
      class="button block mt-3 ml-auto"
      :disabled="!findRide.selectedRide"
      @click="book"
    >
      book
    </button>
  </section>
</template>
