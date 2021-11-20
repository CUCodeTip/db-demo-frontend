<script setup lang="ts">
import { useYourRideStore } from '~/stores/yourRide'

const yourRide = useYourRideStore()

onMounted(() => {
  yourRide.getRides()
})
</script>

<template>
  <div>
    <h2 class="mb-3">
      Create Ride
    </h2>
    <create-ride-form class="mb-6" />
    <h2 v-show="yourRide.rides" class="mb-3">
      Results <span class="font-normal">({{ yourRide.rides?.length }})</span>
    </h2>
    <ol
      class="overflow-y-scroll max-h-75vh
    pr-3 space-y-5"
    >
      <li
        v-for="ride in yourRide.rides"
        :key="ride.starting_time.getMilliseconds()"
        class="bg-gray-700 rounded-xl p-4"
      >
        <ride-card
          :from="ride.from"
          :to="ride.to"
          :date-time="ride.starting_time"
          :max-passengers="ride.max_available_seats"
          :passengers="ride.reserved_passengers"
          :status="ride.ride_status"
        />
      </li>
    </ol>
  </div>
</template>
