<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'
import { formatDateTime } from '~/utils'
const findRide = useFindRideStore()

const book = () => {
  findRide.book(() => {
    // eslint-disable-next-line no-alert
    alert(
      `The ride from ${findRide.selectedRide!.driver_id} departing at ${formatDateTime(findRide.selectedRide!.starting_time)} has been booked.`,
    )
    findRide.reset()
  })
}
</script>

<template>
  <section>
    <div class="flex items-center space-x-4">
      <h2 class="mb-3">
        Results <span class="font-normal">
          ({{ findRide.matchedRides?.length }})
        </span>
      </h2>
      <span v-if="findRide.selectedRide">
        Booking a ride from
        <em class="text-orange-400">
          {{ findRide.selectedRide.driver_id }}
        </em> starting at
        <em class="text-orange-400">
          {{ formatDateTime(findRide.selectedRide.starting_time) }}
        </em></span>
    </div>
    <ol
      v-if="findRide.matchedRides"
      class="space-y-2 h-120 overflow-y-scroll pr-3"
    >
      <li
        v-for="ride in findRide.matchedRides"
        :key="`${ride.driver_id}${ride.starting_time}`"
      >
        <ride-result
          :driver="ride.name"
          :max-passengers="ride.max_available_seats"
          :passengers="ride.reserved_passengers"
          :date-time="ride.starting_time"
          :from="ride.from"
          :to="ride.to"
          @click="findRide.toggleRide(ride.driver_id, ride.starting_time)"
        />
      </li>
    </ol>
    <button
      class="button block mt-3 ml-auto"
      :disabled="!findRide.selectedRide"
      @click="book"
    >
      book
    </button>
  </section>
</template>
